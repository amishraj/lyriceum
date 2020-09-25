import { Component, OnInit } from '@angular/core';
import {HeaderAppService} from '../header-app.service'

@Component({
  selector: 'app-savedlyricsbar',
  templateUrl: './savedlyricsbar.component.html',
  styleUrls: ['./savedlyricsbar.component.css']
})
export class SavedlyricsbarComponent implements OnInit {

  constructor(private headerappService: HeaderAppService) { }

  goSaved(){
    this.headerappService.sendNavigation('Saved');
  }

  ngOnInit(): void {
  }

}
