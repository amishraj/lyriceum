import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeLyricsService {
  private song = new Subject<any>();
  private notasingle= new Subject<any>();

  constructor() { }

  sendSongInfo(artist:string, track:string, image:string, link:string) {
    // console.log("CLICK: " + artist + "," + track)
    this.song.next({artist:artist, track:track, image:image, link:link});
  }

  sendAlbumError(){
    this.notasingle.next(true)
  }

  getAlbumError(): Observable<any>{
    return this.notasingle.asObservable();
  }

getSongInfo(): Observable<any> {
    return this.song.asObservable();
}
}
