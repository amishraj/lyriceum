import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSongService {
  private search = new Subject<any>();
  constructor() { }

  
  sendKeyword(keyword: string) {
    this.search.next(keyword);
}

getKeyword(): Observable<any> {
    return this.search.asObservable();
}
}
