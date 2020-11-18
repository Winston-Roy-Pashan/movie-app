import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/service/movielist.service';
import { Characters } from '../../interface/characters';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  isloading = false;
  characterList: Characters[];

  constructor(private movieservice: MovielistService) { }

  ngOnInit(): void {
    this.loadCharacters();

  }
  loadCharacters(): void {
    this.isloading = true;
    this.movieservice.getAllCharacters().subscribe(response => {
      this.characterList = response.data.results;
      this.isloading = false;
    });
  }

}
