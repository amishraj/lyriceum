import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import {SpotifyService} from '../spotify.service'
import {AppSongService} from '../app-song.service'
import {HomeLyricsService}from '../home-lyrics.service'
import {HeaderSongService} from '../header-song.service'

import {ApiseedsService} from '../apiseeds.service'

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songlink

  loading=false;
  token;

  showinglyrics:boolean=false;
  showalbumerr:boolean=false;
  nosongerr:boolean=false;

  showemptymsg:boolean=true;
  
  lyrics='';
  artist:string;
  song:string;
  songimage:string;
  link:string;

  error=null;

  searchsubscription
  homesubscription
  albumerrorsubscription

  keyword= ''

  result_artists;
  result_songs;

  constructor(private http: HttpClient, private spotifyservice: SpotifyService,
     private appsongservice: AppSongService,
     private homelyricsservice: HomeLyricsService,
     private headersongservice: HeaderSongService,
     private apiseedsservice: ApiseedsService) { 
   
    this.spotifyservice.getAuthToken().subscribe(responseData=>{
      this.token=responseData['access_token'];
    })

    this.searchsubscription= this.appsongservice.getKeyword()
    .subscribe(data=>{
      this.showalbumerr=false;
      this.nosongerr=false;
      this.showemptymsg=false;

      this.onActivate('');
      this.keyword=data;
      this.showinglyrics=false;

      this.spotifyservice.search(this.token,this.keyword).subscribe(data=> {
        // console.log(data)

        // this.result_artists=data.artists.items;
        // console.log(this.result_artists)
        var temp=data['tracks']
        this.result_songs=temp['items'];
        // console.log(this.result_songs)


      }, error=>{
        this.error= error.message;
      })

      this.loading=false;
    })

    this.homesubscription= this.homelyricsservice.getSongInfo()
      .subscribe(data=>{
        this.showemptymsg=false;
        this.showalbumerr=false;
      this.nosongerr=false;

        this.onActivate('');
        this.showalbumerr=false;
        this.nosongerr=false;

        var artist= data['artist']
        var song= data['track']
        var image= data['image']
         var songlink= data['link']

        this.findlyrics(artist, song, image, songlink)
      })

     this.albumerrorsubscription= this.homelyricsservice.getAlbumError()
     .subscribe(data=>{
      this.showemptymsg=false;

      this.onActivate('');
       if(data==true){
        this.nosongerr=false;

        this.showalbumerr=true;
        this.loading=false;
       }
     })
   
  }


  // sendToFirebase(postData: {artist:any, song:any}){
  //   this.http.post('https://lyriceum-test.firebaseio.com/songs.json', postData).subscribe(responseData =>{
  //   console.log(responseData)
  //   })

  // }

  onActivate(event:any) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 0);
}

  findlyrics(artist:string, song:string, image:string, link:string){
        // console.log(btoa("49b2f3fa3485454aab74415a1d725356:a82dfe26e0c84d409e3c725a357bd5b0"));

        this.artist=artist;
        this.song=song;
        this.songimage=image;
        this.link= link;

    this.onActivate('');

    this.loading=true;
    var songlyrics= this.http
    .get<any>('https://api.lyrics.ovh/v1/'+artist+'/'+song)
    .subscribe(data=>{
     var templyrics= data['lyrics'];
      // console.log(this.lyrics)

      if(templyrics==''){
        // console.log("Empty Lyrics, checking second api")

        var lyrics= this.apiseedsservice.getlyrics(artist, song)
        .subscribe(data=>{
          // console.log(data['result']['track']['text'])

          this.lyrics=data['result']['track']['text']


          this.showinglyrics=true;
          this.nosongerr=false;

          this.loading=false;
        }, error=>{

          // console.log("Error")

          this.showinglyrics=false;
          this.nosongerr=true;
  
          //send event to header to hide
  
          this.headersongservice.sendtogglefunc('hide');

          this.loading=false;
          })
        

      }
      else{
        // console.log("Found")

        this.showinglyrics=true;
        this.nosongerr=false;

        this.lyrics= templyrics;

        this.loading=false;

      }
      // console.log(this.lyrics)
      // console.log(data);
     
    });

  
  }


  ngOnInit(): void {
    
  }

}
