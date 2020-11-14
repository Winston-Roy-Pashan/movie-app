import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { MOVIE } from '../components/movielist/mocklist';
import { Movie } from '../interface/movielist';
import { Md5 } from 'ts-md5/dist/md5'

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  pubkey = '3b4177da348ec15d986c00f5f1088019';
  privkey='562dd50318b1d02335ab2f545e4099e2b9ef9cef';

  movieUrl = 'http://gateway.marvel.com/v1/public/series';
  comicUrl = 'http://gateway.marvel.com/v1/public/comics';
  characterUrl = 'http://gateway.marvel.com/v1/public/characters';
  tvshowUrl = 'http://gateway.marvel.com/v1/public/events';


  movie:Movie;

  constructor(private httpClient: HttpClient) { }

  getAllMovies (): Observable <any> {
    let ts=Date.now();
    let md5= new Md5();
   let md5Hash=md5.appendStr(ts+this.privkey+this.pubkey);
    let finalurl=`${this.movieUrl}?ts=${ts}&apikey=${this.pubkey}&hash=${md5Hash.end()}`

  console.log(finalurl)
    return this.httpClient.get(finalurl);
 }

  getMovie(id:string): Observable <any> {

    let ts=Date.now();
    let md5= new Md5();
   let md5Hash=md5.appendStr(ts+this.privkey+this.pubkey);
    let finalurl=`${this.movieUrl}/${id}?ts=${ts}&apikey=${this.pubkey}&hash=${md5Hash.end()}`;
    return this.httpClient.get(finalurl);
  }
  getAllComics(): Observable <any> {
    let ts=Date.now();
    let md5= new Md5();
   let md5Hash=md5.appendStr(ts+this.privkey+this.pubkey);
    let finalurl=`${this.comicUrl}?ts=${ts}&apikey=${this.pubkey}&hash=${md5Hash.end()}`
  console.log(finalurl)

    return this.httpClient.get(finalurl);
 }

 
 getAllCharacters(): Observable <any> {
   let ts=Date.now();
   let md5= new Md5();
  let md5Hash=md5.appendStr(ts+this.privkey+this.pubkey);
   let finalurl=`${this.characterUrl}?ts=${ts}&apikey=${this.pubkey}&hash=${md5Hash.end()}`

 console.log(finalurl)
  
   return this.httpClient.get(finalurl);
}

getTvShows(): Observable <any> {
  let ts=Date.now();
  let md5= new Md5();
 let md5Hash=md5.appendStr(ts+this.privkey+this.pubkey);
  let finalurl=`${this.tvshowUrl}?ts=${ts}&apikey=${this.pubkey}&hash=${md5Hash.end()}`

console.log(finalurl)
 
  return this.httpClient.get(finalurl);
}

}
