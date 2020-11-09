import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovielistService } from 'src/app/service/movielist.service';
import { Movie } from '../movielist/movielist';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movie: Movie;

  constructor(private movieservice: MovielistService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('movieid');
    this.loadMovie(id);
  }

  loadMovie(id: string): void {
    this.movie = this.movieservice.getMovie(id)
  }

}
