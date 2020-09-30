import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiseedsService {

  key:'bKl4HLyxENCC6l8YWPszjeeeBj13GOtuPsbAQNU8Iy2ZdehF68XGL4Y6N44xsCql'

  constructor(private http: HttpClient) { }

  getlyrics(artist:string, track:string){
    let searchParams= new HttpParams();
    searchParams= searchParams.append('apikey', 'bKl4HLyxENCC6l8YWPszjeeeBj13GOtuPsbAQNU8Iy2ZdehF68XGL4Y6N44xsCql')

    return this.http.get('https://orion.apiseeds.com/api/music/lyric/'+artist+'/'+track,
      {
        params: searchParams
      }
    )

  }
}
