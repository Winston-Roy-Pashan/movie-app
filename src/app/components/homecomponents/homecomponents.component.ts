import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Movie } from '../../interface/movielist';
import { Tvshow } from '../../interface/tvshow';
@Component({
  selector: 'app-homecomponents',
  templateUrl: './homecomponents.component.html',
  styleUrls: ['./homecomponents.component.scss']
})
export class HomecomponentsComponent implements OnInit {

  constructor(private movieservice: MovielistService) { }

  tvshowList:Tvshow[];
  movielist: Movie[];
  isloading=false;
  ngOnInit(): void {
    this.loadMovies();
    this.loadTvshow();
  }
  loadMovies(): void {
    this.isloading=true;
    this.movieservice.getAllMovies().subscribe(response => {
      this.movielist = response.data.results;
      console.log("moviess...........",this.movielist)
      console.log('MOVIES', response);
     this.isloading=false;
    });
  }

  loadTvshow(): void {
    this.isloading=true;
    this.movieservice.getTvShows().subscribe(response => {
      this.tvshowList = response.data.results;
      console.log("tvshow...........",this.tvshowList)
      console.log('tvshow', response);
      this.isloading=false;
    });
  }
}
