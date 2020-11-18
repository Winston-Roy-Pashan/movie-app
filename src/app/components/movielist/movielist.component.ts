import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Movie } from '../../interface/movielist';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  isloading = false;

  movielist: Movie[];
  constructor(private movieservice: MovielistService) { }
  ngOnInit(): void {
    this.loadMovies();
  }
  loadMovies(): void {
    this.isloading = true;
    this.movieservice.getAllMovies().subscribe(response => {
      this.movielist = response.data.results;
      this.isloading = false;
    });
  }
}
