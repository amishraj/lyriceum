import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HeaderAppService} from '../header-app.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerappService: HeaderAppService) { }

  callhome(){
    this.headerappService.sendNavigation("home");
  }

  ngOnInit(): void {
  }

}
