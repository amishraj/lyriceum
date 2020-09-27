import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedlyricsbarHeaderService {

  private hidetoggle = new Subject<any>();
  constructor() { }

  
  sendNote() {
    this.hidetoggle.next('hide'); 
  }

  getNote(): Observable<any> {
      return this.hidetoggle.asObservable();
  }
}
