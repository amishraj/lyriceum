import { Component, OnInit } from '@angular/core';
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

  showModalBox: boolean = false;

  loading:boolean=false

  constructor(private spotifyservice: SpotifyService, 
    private homelyricsservice: HomeLyricsService,
    private homeappservice: HomeAppService) { 

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
    })
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

  gotolyrics(artist:string, song:string, type:string, image:string){

    if(type!='single'){
      this.homelyricsservice.sendAlbumError();
      this.homeappservice.showLyricsFromHome();

    }
    else{
      this.homelyricsservice.sendSongInfo(artist,song, image)
      this.homeappservice.showLyricsFromHome();
    }
  }

  ngOnInit(): void {

    
  }

}
