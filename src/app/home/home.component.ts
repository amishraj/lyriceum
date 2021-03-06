import { Component, OnInit, ViewChild } from '@angular/core';
import {SpotifyService} from '../spotify.service'
import {HttpClient} from '@angular/common/http'
import {HomeLyricsService} from '../home-lyrics.service'
import {HomeAppService} from '../home-app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token
  result

  kanyequote:string;

  modalloading:boolean=true;

  globalresult

  albumsongs

  current_album=''
  current_artist=''

  showModalBox: boolean = false;

  @ViewChild ('getalbumtracks') getalbumtracks;

  loading:boolean=false

  constructor(private spotifyservice: SpotifyService, 
    private homelyricsservice: HomeLyricsService,
    private homeappservice: HomeAppService,
    private http: HttpClient) { 

    this.loading=true;
    this.spotifyservice.getAuthToken().subscribe(responseData=>{
      this.onActivate('');
      this.token=responseData['access_token'];
      // console.log("Got Token: "+ this.token)


      this.spotifyservice.getNewReleases(this.token).subscribe(data=>{
       
        this.result=data['albums']['items']
        // console.log(this.result)

        this.loading=false;
      })

      this.spotifyservice.globalTopFifty(this.token).subscribe(data=>{

        this.globalresult= data['tracks']['items']
        // console.log(this.globalresult)
        var temp=this.globalresult;
        this.globalresult=[];
        for(var i=0; i<10; i++){
          this.globalresult[i]=temp[i]
        }
      })
    })

    var kanyequotesubscription= this.http.get("https://api.kanye.rest/").subscribe(data=>{
      this.kanyequote=data['quote'];
    })

  }

  registerclick(){
    console.log("Click Registered")
  }

  getalbumtracksfunc(){
    this.getalbumtracks.nativeElement.click();
  }

  onActivate(event:any) { //function to scroll to top
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 0);
  }

  gotolyrics(artist:string, song:string, type:string, image:string, id:string, link:string){
    

    if(type=='single'){
      this.homelyricsservice.sendSongInfo(artist,song, image, link)
      this.homeappservice.showLyricsFromHome();
    }
    else if(type=='album' || type=='compilation'){
      // console.log("Album id: "+ id)

      this.spotifyservice.getAuthToken().subscribe(responseData=>{
        
        this.token=responseData['access_token'];
        // console.log("Got Token: "+ this.token)
  
        this.current_album=song;
        this.current_artist=artist;

        this.spotifyservice.getAlbumTracks(id, this.token).subscribe(data=>{
          // console.log(data)
          this.albumsongs= data['items']

          this.modalloading=false;
        })
      })

      this.getalbumtracksfunc();
    }
    else if(type=='track'){
      // console.log("Called but no img")

      this.getalbumtracksfunc(); //opens modal

      this.spotifyservice.getAuthToken().subscribe(responseData=>{
        
        this.token=responseData['access_token'];
        // console.log("Got Token: "+ this.token)

        this.spotifyservice.getTrackInfo(id, this.token).subscribe(data=>{
          //  console.log(data)
          var sendimage= data['album']['images'][0]['url']
          this.homelyricsservice.sendSongInfo(artist,song, sendimage, link)
          this.homeappservice.showLyricsFromHome();
        })
      })
      

    }
    else{
      // console.log("Called lyrics and type= " + type)
      this.homelyricsservice.sendAlbumError();
      this.homeappservice.showLyricsFromHome();
    }
  }

  ngOnInit(): void {

    
  }

}
