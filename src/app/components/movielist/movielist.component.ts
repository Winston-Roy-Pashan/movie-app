import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Movie } from './movielist';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  movie: Movie = {
    id: '',
    title: '',
    year: 0,
    rating: 0,
    imageUrl: ''
  }

  movielist: Movie[];
  constructor(private movieservice: MovielistService) { }
  ngOnInit(): void {
    this.loadMovies();
  }
  rating(rate): number {
    return rate;
  }
  save(): void {
    this.movie.id = this.getRandomString();
    const TempMovie: Movie = { ...this.movie };
    this.movielist.unshift(TempMovie)
  }
  delete(movie: Movie): void {
    this.movielist.forEach((item, index) => {
      if (item === movie) {
        this.movielist.splice(index, 1)
      }
    })
  }
  getRandomString(): string {
    return Math.floor(Math.random() * Math.floor(30000)).toString()
  }
  loadMovies(): void {
    this.movielist = this.movieservice.getAllMovies();
  }

}
