import { Injectable } from '@angular/core';
import { MOVIE } from '../components/movielist/mocklist';
import { Movie } from '../components/movielist/movielist';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  constructor() { }

  getAllMovies():Movie[]{
    return MOVIE;
  }

  getMovie(id:string): Movie{
    return MOVIE.find(movie=>movie.id === id)
  }


}
