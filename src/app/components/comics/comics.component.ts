import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Comics } from '../../interface/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

isloading=false;
  comicList:Comics[];

  constructor(private movieservice: MovielistService) { }

  ngOnInit(): void {
   
    this.loadComics();
  }
  loadComics(): void {
    this.isloading=true;
    this.movieservice.getAllComics().subscribe(response => {
      this.comicList = response.data.results;
      console.log("moviess...........",this.comicList)
      console.log('MOVIES', response);
      this.isloading=false;
    });
  }
}
