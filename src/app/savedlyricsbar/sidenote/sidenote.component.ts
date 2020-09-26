import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenote',
  templateUrl: './sidenote.component.html',
  styleUrls: ['./sidenote.component.css']
})
export class SidenoteComponent implements OnInit {

  @Input('nLyric') lyric:string;
  @Input('nSong') song:string;


  constructor() { }

  ngOnInit(): void {
  }

}
