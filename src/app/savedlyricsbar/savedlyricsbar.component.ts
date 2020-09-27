import { Component, OnInit } from '@angular/core';
import {HeaderAppService} from '../header-app.service'
import {SavedpagetosidebarService} from '../savedpagetosidebar.service'
import { SavedlyricsbarHeaderService} from '../savedlyricsbar-header.service'

@Component({
  selector: 'app-savedlyricsbar',
  templateUrl: './savedlyricsbar.component.html',
  styleUrls: ['./savedlyricsbar.component.css']
})
export class SavedlyricsbarComponent implements OnInit {

  lyrics=[]

  allnotessubscription

  constructor(private headerappService: HeaderAppService, private savedpagetosidebar: SavedpagetosidebarService,
    private savedlyricsbarheader: SavedlyricsbarHeaderService) { 
    this.allnotessubscription= this.savedpagetosidebar.getAll()
      .subscribe(data=>{
        var temparr;
        this.lyrics=data;

        if(this.lyrics.length>5){
          temparr=this.lyrics
          this.lyrics=[];
          for(var i=0; i<5; i++){
            this.lyrics[i]=temparr[i]
          }
        }
      })
    }

  goSaved(){
    this.savedlyricsbarheader.sendNote();
    this.headerappService.sendNavigation('Saved');
  }

  ngOnInit(): void {
  }

}
