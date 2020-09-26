import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeAppService {

  private showlyrics = new Subject<any>();

  constructor() { }

  showLyricsFromHome() {
    this.showlyrics.next(true);
}

getLyricsFromHome(): Observable<any> {
    return this.showlyrics.asObservable();
}
}
