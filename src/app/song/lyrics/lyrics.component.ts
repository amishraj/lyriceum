import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input('nLyric') element: string;

  constructor() { }

  ngOnInit(): void {
  }

}
