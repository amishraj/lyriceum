import { Component, OnInit } from '@angular/core';
import {HeaderAppService} from '../header-app.service'
import {SavedpagetosidebarService} from '../savedpagetosidebar.service'

@Component({
  selector: 'app-savedlyricsbar',
  templateUrl: './savedlyricsbar.component.html',
  styleUrls: ['./savedlyricsbar.component.css']
})
export class SavedlyricsbarComponent implements OnInit {

  lyrics

  allnotessubscription

  constructor(private headerappService: HeaderAppService, private savedpagetosidebar: SavedpagetosidebarService) { 
    this.allnotessubscription= this.savedpagetosidebar.getAll()
      .subscribe(data=>{
        this.lyrics=data;
      })
    }

  goSaved(){
    this.headerappService.sendNavigation('Saved');
  }

  ngOnInit(): void {
  }

}
