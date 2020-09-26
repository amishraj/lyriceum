import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderAppService } from './header-app.service' 
import { AppSongService} from './app-song.service'
import {HomeAppService} from './home-app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'lyriceum';
  showhome:boolean=true;
  showlyrics:boolean=false;
  showsavedlyrics:boolean=false;
  savedbar:boolean=true;

  homesubscription;
  searchkeywordsubscription;

  constructor(private headerappService: HeaderAppService, 
    private appsongservice: AppSongService,
    private homeappservice: HomeAppService)
    {
    this.homesubscription= this.headerappService.getNavigation()
    .subscribe(data=>{ 
      if(data=='home'){
        this.gohome();
      }
      else if(data=='Saved'){
        this.gotosaved();
      }
      else if(data=='lyrics'){
        this.gotosong();
      }
      // console.log("Received homeclickedvalue: " + data); 
    } )

    this.searchkeywordsubscription= this.headerappService.getSearchWord()
    .subscribe(data=>{
      this.appsongservice.sendKeyword(data)
    })

    this.homeappservice.getLyricsFromHome().subscribe(data=>{
      if(data==true){
        this.gotosong();
      }
    })
  }

  gohome(){
    this.showhome=true;
    this.showlyrics=false;
    this.showsavedlyrics=false;
    this.savedbar=true;
  }

  gotosong(){
    this.showhome=false;
    this.showlyrics=true;
    this.showsavedlyrics=false;
    this.savedbar=true;

  }

  gotosaved(){
    this.showhome=false;
    this.showlyrics=false;
    this.showsavedlyrics=true;
    this.savedbar=false;

  }

  ngOnInit(): void {
    this.showhome=true;
  this.showlyrics=false;
  this.showsavedlyrics=false;
  this.savedbar=true;

  }
  
}
