import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  // @Input('nElement') element: {title:string, description:string};
  @Output() noteDelete: EventEmitter<{song:string, lyric:string}>= new EventEmitter();


  @Input('nSong') song:string;
  @Input('nLyric') lyric:string;

  deleteLyric(song:string, lyric:string){
    this.noteDelete.emit({song: song, lyric: lyric});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
