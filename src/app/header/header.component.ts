import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {HeaderAppService} from '../header-app.service'
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {SpotifyService}from '../spotify.service'
import { HomeLyricsService } from '../home-lyrics.service'
import {HeaderLyricsService} from '../header-lyrics.service'
import {HeaderSongService} from '../header-song.service'
import {SavedlyricsbarHeaderService} from '../savedlyricsbar-header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {

  @ViewChild ('dropdownfakebtn') dropdownfakebtn;

  searchword='';
  token
  result_songs
  error

  showtogglebtn:boolean=false;
  hidedropdown:boolean=true;

  togglestatussubscription; //for visibility of the toggle button for selecting/not selecting

  getStopSubscription; //getting the stop selecting event from lyrics Component

  alerthidesubscription; //hide toggle button in case of alert; from song component

  constructor(private headerappService: HeaderAppService, private spotifyservice: SpotifyService
    , private homelyricsservice: HomeLyricsService,
    private headerlyricsservice: HeaderLyricsService,
    private headersongservice: HeaderSongService,
    private savedlyricsbarheaderservice: SavedlyricsbarHeaderService) { 
    this.spotifyservice.getAuthToken().subscribe(responseData=>{
      this.token=responseData['access_token'];
    })
  
    this.togglestatussubscription= this.headerappService.getToggleStatus()
    .subscribe(data=>{
      if(data==true){
        this.showtogglebtn=true;
      }
    })

    this.getStopSubscription= this.headerlyricsservice.getStop()
    .subscribe(data=>{
      if(data==true){
        this.selecting=false;
      }
    })

    this.alerthidesubscription= this.headersongservice.gettogglefunc()
    .subscribe(data=>{
      if(data=='hide'){
        this.showtogglebtn=false;
      }
    })

   var togglefromsidebar= this.savedlyricsbarheaderservice.getNote()
    .subscribe(data=>{
      if(data=='hide'){
        this.showtogglebtn=false;
      }
    })

  }

  selecting:boolean=false;

  sendtoggle(status:string){
    this.selecting=!this.selecting
    this.headerlyricsservice.sendtogglefunc(status);
  }
  
  backspacefunction(){
    // console.log("Backspace Pressed")

    if(this.searchword.length==0){

    }
  }
  callhome(){
    this.showtogglebtn=false;
    this.headerappService.sendNavigation("home");
  }

  gotolyrics(artist:string, track:string, image:string, link:string){
    this.showtogglebtn=true;
    this.headerappService.sendNavigation("lyrics")
    this.homelyricsservice.sendSongInfo(artist, track, image, link)
  }

  calllyrics(){
    this.showtogglebtn=false;
    this.headerappService.sendNavigation("lyriceum")
  }

  dropdownfakefunc(){
    this.dropdownfakebtn.nativeElement.click();
  }
  sendsearch(){
    if(this.searchword.length==0){
      this.hidedropdown=true;
    }else{
      this.hidedropdown=false;

    }
  //   if(this.searchword.length>0 && this.searchword.length<2){
  //   this.dropdownfakefunc();
  // }
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
