import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileselecteventService {

  private saveclicked = new Subject<any>();
  constructor() { }

  
  sendClick() {
    this.saveclicked.next('send'); 
  }

  getClick(): Observable<any> {
      return this.saveclicked.asObservable();
  }
}
