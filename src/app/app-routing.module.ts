import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { VedioComponent } from './components/vedio/vedio.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'main', component: HeaderComponent },
  { path: 'movies', component: MovielistComponent },
 { path: 'movies/:movieid', component: MoviedetailsComponent },

 { path: 'comics', component: ComicsComponent },
 { path: 'characters', component: CharactersComponent },
 { path: 'tvshow', component: TvshowComponent },
 { path: 'videos', component: VedioComponent }


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
