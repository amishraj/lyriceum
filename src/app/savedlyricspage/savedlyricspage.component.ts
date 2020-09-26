import { Component, OnInit } from '@angular/core';
import {LyricsSavedpageService} from '../lyrics-savedpage.service'
import {SavedpagetosidebarService} from '../savedpagetosidebar.service'

@Component({
  selector: 'app-savedlyricspage',
  templateUrl: './savedlyricspage.component.html',
  styleUrls: ['./savedlyricspage.component.css']
})
export class SavedlyricspageComponent implements OnInit {

  gotnotesubscription;

  savedlyrics=[]// {song: stargazing, lyric: i like angular}

  constructor(private lyricssavedpage: LyricsSavedpageService, private savedpagetosidebar: SavedpagetosidebarService) { 
    this.gotnotesubscription= this.lyricssavedpage.getNote()
    .subscribe(data=>{
       this.savedlyrics.push(data);
      //  console.log("Got new note: " + JSON.stringify(data))
      //  console.log("Got new this: " + JSON.stringify(this.savedlyrics))

    })

    this.savedpagetosidebar.sendAll(this.savedlyrics)

  }

  onNoteDeleted(noteData:{song:string, lyric:string}){
    var i;
    for(i=0; i<this.savedlyrics.length; i++){
      if(this.savedlyrics[i].song==noteData.song && this.savedlyrics[i].lyric== noteData.lyric){
        this.savedlyrics.splice(i,1);
      }
    }

  }

  ngOnInit(): void {
  }

}
