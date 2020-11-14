import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Movie } from '../../interface/movielist';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  isloading=false;
  // movie: Movie = {
  //   id: 0,
  //   title: '',
  //   endYear: 0,
  //   rating: '',
  //   imageUrl: ''
  // }

  movielist: Movie[];
  constructor(private movieservice: MovielistService) { }
  ngOnInit(): void {
    this.loadMovies();
  }
  rating(rate): number {
    return rate;
  }
  // save(): void {
  //   this.movie.id = this.getRandomString();
  //   const TempMovie: Movie = { ...this.movie };
  //   this.movielist.unshift(TempMovie)
  // }
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
  // loadMovies(): void {
  //   this.movielist = this.movieservice.getAllMovies();
  // }
  loadMovies(): void {
    this.isloading=true;
    this.movieservice.getAllMovies().subscribe(response => {
      this.movielist = response.data.results;
      console.log("moviess...........",this.movielist)
      console.log('MOVIES', response);
      this.isloading=false;
    });
  }
}
