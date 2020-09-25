import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderAppService {
  private navigation = new Subject<any>();

  constructor() { }

  sendNavigation(location: string) {
    this.navigation.next(location);
}

getNavigation(): Observable<any> {
    return this.navigation.asObservable();
}
}
