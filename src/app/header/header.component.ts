import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HeaderAppService} from '../header-app.service'
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {SpotifyService}from '../spotify.service'
import { HomeLyricsService } from '../home-lyrics.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {

  searchword='';
  token
  result_songs
  error

  constructor(private headerappService: HeaderAppService, private spotifyservice: SpotifyService
    , private homelyricsservice: HomeLyricsService) { 
    this.spotifyservice.getAuthToken().subscribe(responseData=>{
      this.token=responseData['access_token'];
    })
  
  }
  
  backspacefunction(){
    // console.log("Backspace Pressed")

    if(this.searchword.length==0){

    }
  }
  callhome(){
    this.headerappService.sendNavigation("home");
  }

  gotolyrics(artist:string, track:string, image:string, link:string){
    this.headerappService.sendNavigation("lyrics")
    this.homelyricsservice.sendSongInfo(artist, track, image, link)
  }

  calllyrics(){
    this.headerappService.sendNavigation("lyriceum")
  }

  sendsearch(){
    // this.calllyrics();
    // this.headerappService.sendSearchWord(this.searchword)

    this.spotifyservice.search(this.token,this.searchword).subscribe(data=> {
      // console.log(data)

      // this.result_artists=data.artists.items;
      // console.log(this.result_artists)
      var temp=data['tracks']
      this.result_songs=temp['items'];
        // console.log( this.result_songs)


    }, error=>{
      // this.error= error.message;
    })
  }

  ngOnInit(): void {
  }

}
