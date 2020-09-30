import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {LyricsSavedpageService} from '../../lyrics-savedpage.service'
import {HeaderLyricsService}from '../../header-lyrics.service'
import {MobileselecteventService} from '../../mobileselectevent.service'

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input('nLyric') element: string;

  @Input('nSong') song: string;

  @ViewChild ('openbutton') openbutton;


  selectedText: string = '';

  selecting=false;

  togglesubscription; //for start/stop selecting

  constructor(private lyricssavedpageservice: LyricsSavedpageService,
    private headerlyricsservice: HeaderLyricsService,
    private mobileselectevent: MobileselecteventService) { 

    startselecting=false;
    // console.log("Start Selecting: " + startselecting)

    this.togglesubscription= this.headerlyricsservice.gettogglefunc()
    .subscribe(data=>{
      if(data=='notselecting'){
        startselecting=true;
        this.selecting=true;
      }
      else if(data== 'selecting'){
        startselecting=false;
        this.selecting=false;
      }
    })

    this.mobileselectevent.getClick()
    .subscribe(data=>{
      if(data=="send"){
        this.startsaving();
        this.showSelectedText();
      }
    })

  }

  registerclick(){
    console.log("Click Registered")
  }

  startsaving(){
    startselecting=true;
    this.selecting=true;

    // console.log("Start Selecting: " + startselecting)
  }

  sendStop(){
    this.headerlyricsservice.sendStop();
  }

  stopsaving(){
    startselecting=false;
    this.selecting=false;
  }

  ngOnInit(): void {
  }

  saveLyrics(){
    //  console.log("Saving... " + this.selectedText);

    this.lyricssavedpageservice.sendNote(this.song, this.selectedText);
    
  }

  showSelectedText() {


    if(startselecting==true){
      // console.log("Sending Selections")

      this.openbutton.nativeElement.click();
      // console.log("Sending Selections pu")


      var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } 
    this.selectedText = text;

    //  alert("You selected: "+ this.selectedText)
    }
    
  }

}


 var startselecting= new(Boolean);

