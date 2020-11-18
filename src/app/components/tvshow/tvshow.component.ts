import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Tvshow } from '../../interface/tvshow';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  isloading = false;
  tvshowList: Tvshow[];

  constructor(private movieservice: MovielistService) { }

  ngOnInit(): void {
    this.loadTvshow();

  }
  loadTvshow(): void {
    this.isloading = true;
    this.movieservice.getTvShows().subscribe(response => {
      this.tvshowList = response.data.results;
      this.isloading = false;
    });
  }

}