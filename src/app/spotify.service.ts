import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private client_id= '49b2f3fa3485454aab74415a1d725356'
  private client_secret= 'a82dfe26e0c84d409e3c725a357bd5b0'

  constructor(private http: HttpClient) { }

  search(token:any, keyword:string){
    // console.log("Token= " + token)


    let searchParams= new HttpParams();
    searchParams= searchParams.append('q', keyword)
    searchParams= searchParams.append('limit', '10'),
    searchParams= searchParams.append('type', 'artist,track')


    return this.http.get('https://api.spotify.com/v1/search'
    ,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token})
      ,params: searchParams
    }) 

  }

  getNewReleases(token:any){
    // console.log("Token= " + token)

    let searchParams= new HttpParams();
    searchParams= searchParams.append('limit', '10')



    return this.http.get('https://api.spotify.com/v1/browse/new-releases'
    ,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token})
      ,params: searchParams
    }) 

  }

  getTrackInfo(id:any, token:any){
    return this.http.get('https://api.spotify.com/v1/tracks/' + id
    ,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token})
      
    }) 
  }

  globalTopFifty(token:any){
    return this.http.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF'
    ,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token})
      
    }) 
  }

  getAlbumTracks(id:any, token:any){
    return this.http.get('https://api.spotify.com/v1/albums/' + id+ '/tracks'
    ,{
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token})
      
    }) 

  }

  getAuthToken(){
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(),
    {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Basic '+btoa("49b2f3fa3485454aab74415a1d725356:a82dfe26e0c84d409e3c725a357bd5b0")
        
      })
    }
    )

  }
}
