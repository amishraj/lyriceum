import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderAppService } from './header-app.service' 

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

  constructor(private headerappService: HeaderAppService){
    this.homesubscription= this.headerappService.getNavigation()
    .subscribe(data=>{ 
      if(data=='home'){
        this.gohome();
      }
      else if(data=='Saved'){
        this.gotosaved();
      }
      // console.log("Received homeclickedvalue: " + data); 
    } )
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
