import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import {SpotifyService} from '../spotify.service'
import {AppSongService} from '../app-song.service'
import {HomeLyricsService}from '../home-lyrics.service'

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

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

  error=null;

  searchsubscription
  homesubscription
  albumerrorsubscription

  keyword= ''

  result_artists;
  result_songs;

  constructor(private http: HttpClient, private spotifyservice: SpotifyService,
     private appsongservice: AppSongService,
     private homelyricsservice: HomeLyricsService) { 
   
    this.spotifyservice.getAuthToken().subscribe(responseData=>{
      this.token=responseData['access_token'];
    })

    this.searchsubscription= this.appsongservice.getKeyword()
    .subscribe(data=>{
      this.showemptymsg=false;
      this.showalbumerr=false;
      this.nosongerr=false;

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

        this.findlyrics(artist, song, image)
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

  findlyrics(artist:string, song:string, image:string){
        // console.log(btoa("49b2f3fa3485454aab74415a1d725356:a82dfe26e0c84d409e3c725a357bd5b0"));

        this.artist=artist;
        this.song=song;
        this.songimage=image;

    this.onActivate('');

    this.loading=true;
    var songlyrics= this.http
    .get<any>('https://api.lyrics.ovh/v1/'+artist+'/'+song)
    .subscribe(data=>{
      this.lyrics= data['lyrics'];
      // console.log(this.lyrics)

      if(this.lyrics==''){
        this.showinglyrics=false;
        this.nosongerr=true;
      }
      else{
        this.showinglyrics=true;
        this.nosongerr=false;

      }
      // console.log(this.lyrics)
      // console.log(data);
      this.loading=false;
    });
  }


  ngOnInit(): void {
    
  }

}
