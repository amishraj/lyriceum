import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderAppService {
  private navigation = new Subject<any>();
  private search= new Subject<any>();
  private togglestatus= new Subject<any>();

  constructor() { }

  sendNavigation(location: string) {
    this.navigation.next(location);
}



getNavigation(): Observable<any> {
    return this.navigation.asObservable();
}

  sendSearchWord(keyword:string){
    this.search.next(keyword)
  }

  getSearchWord(): Observable<any> {
    return this.search.asObservable();
  }

  sendToggleStatus(status:boolean){
    this.togglestatus.next(status)
  }

  getToggleStatus():Observable<any>{
    return this.togglestatus.asObservable();
  }
}
