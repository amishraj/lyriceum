import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css']
})
export class SongdetailsComponent implements OnInit {

  @Input('nSong') songelement: string;
  @Input('nArtist') artistelement: string;
  @Input('nImage') imageelement: string;


  constructor() { }

  ngOnInit(): void {
  }

}
