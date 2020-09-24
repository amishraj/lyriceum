import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  constructor(private http: HttpClient) { }

  lyrics='';
  artist;
  song;

  onRequestSent(){
    var songlyrics= this.http
    .get<any>('https://api.lyrics.ovh/v1/'+this.artist+'/'+this.song)
    .subscribe(data=>{
      this.lyrics= data.lyrics;
      console.log(this.lyrics)
      // console.log(data);

    });
  }

  ngOnInit(): void {
  }

}
