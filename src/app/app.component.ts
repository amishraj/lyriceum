import { Component, OnInit } from '@angular/core';

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

  constructor(){}

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
