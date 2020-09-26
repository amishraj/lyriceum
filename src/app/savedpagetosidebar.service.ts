import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedpagetosidebarService {

  private allsaved = new Subject<any>();
  constructor() { }

  
  sendAll(allsaved: {song:string, lyric:string}[]) {
    this.allsaved.next(allsaved); 
  }

  getAll(): Observable<any> {
      return this.allsaved.asObservable();
  }
}
