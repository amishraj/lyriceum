import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientId: '49b2f3fa3485454aab74415a1d725356'
  artistsUrl: ''

  constructor(private http: HttpClient) { }
}
