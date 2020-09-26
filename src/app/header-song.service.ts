import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderSongService {

  private sendtoggle = new Subject<any>();

  constructor() { }

  sendtogglefunc(toggle:string) {
    this.sendtoggle.next(toggle);
}

gettogglefunc(): Observable<any> {
    return this.sendtoggle.asObservable();
}

}
