import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  // @Input('nElement') element: {title:string, description:string};
  @Output() noteDelete: EventEmitter<{song:string, lyric:string}>= new EventEmitter();

  @Output() alertmsg: EventEmitter<string>= new EventEmitter();


  @Input('nSong') song:string;
  @Input('nLyric') lyric:string;

  deleteLyric(song:string, lyric:string){
    this.noteDelete.emit({song: song, lyric: lyric});
  }

  sendAlert(){
    this.alertmsg.emit('success')
  }

  constructor() { }

  
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.sendAlert(); //success message alert

  }

  ngOnInit(): void {
  }

}
