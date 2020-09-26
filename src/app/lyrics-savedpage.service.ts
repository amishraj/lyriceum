import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsSavedpageService {
  private lyric = new Subject<any>();
  constructor() { }

  
  sendNote(song:string, lyric: string) {
    this.lyric.next({song:song, lyric:lyric}); 
  }

  getNote(): Observable<any> {
      return this.lyric.asObservable();
  }
}
