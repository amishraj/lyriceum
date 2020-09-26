import { Component, Inject, Injectable, OnInit, SecurityContext } from '@angular/core';
import {LyricsSavedpageService} from '../lyrics-savedpage.service'
import {SavedpagetosidebarService} from '../savedpagetosidebar.service'

import { DomSanitizer } from '@angular/platform-browser';


import { SESSION_STORAGE, StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

const STORAGE_KEY = 'lyriceum';

@Component({
  selector: 'app-savedlyricspage',
  templateUrl: './savedlyricspage.component.html',
  styleUrls: ['./savedlyricspage.component.css']
})

@Injectable()
export class SavedlyricspageComponent implements OnInit {

  gotnotesubscription;

  alerts=[];

  lookingempty:boolean=true;
  showalert:boolean=false;

  savedlyrics=[]// {song: stargazing, lyric: i like angular}

  constructor(sanitizer: DomSanitizer, private lyricssavedpage: LyricsSavedpageService, 
    private savedpagetosidebar: SavedpagetosidebarService,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { 
    this.gotnotesubscription= this.lyricssavedpage.getNote()
    .subscribe(data=>{

       this.savedlyrics.unshift(data);
       console.log("Got new note: " + JSON.stringify(data))
      //  console.log("Got new this: " + JSON.stringify(this.savedlyrics))
      
      this.storage.set(STORAGE_KEY, this.savedlyrics);
      this.savedpagetosidebar.sendAll(this.savedlyrics)

      this.lookingempty=false;
    })

  }

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


  dismissSuccess(index:number){
    for(var i=0; i<this.alerts.length; i++){
      if(index==i){
        this.alerts.splice(index,1)
      }
    }
  }

  onSuccessAlert(event:any){
    this.onActivate('')
    if(event=='success'){

      this.alerts.push(this.alerts.length) 

      setTimeout(()=>{
        this.alerts.pop();
        
      }, 4000)
    }
  }


  onNoteDeleted(noteData:{song:string, lyric:string}){
    var i;
    for(i=0; i<this.savedlyrics.length; i++){
      if(this.savedlyrics[i].song==noteData.song && this.savedlyrics[i].lyric== noteData.lyric){
        this.savedlyrics.splice(i,1);
      }
    }
    if(this.savedlyrics.length==0){
      this.lookingempty=true;
    }
    this.storage.set(STORAGE_KEY, this.savedlyrics);
   

  }

  ngOnInit(): void {
    this.savedlyrics= this.storage.get(STORAGE_KEY);
    if( this.savedlyrics==null){
      this.savedlyrics=[];
    }
    else{
      this.lookingempty=false;
    }
    this.savedpagetosidebar.sendAll(this.savedlyrics)

  }

}
