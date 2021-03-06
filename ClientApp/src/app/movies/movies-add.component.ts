import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies.models';
import { Router } from '@angular/router';
import { MoviesService } from './movies-services';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html'
})
export class MoviesAddComponent {

  public movie: Movie = <Movie>{};

  constructor(private movieService: MoviesService,
              private router: Router) { }
  
  public saveMovie()
  {
    this.movieService.saveMovie(this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies");
    }, error => console.error(error));

  }
  public backToList() {
    this.router.navigateByUrl("/movies");
  }
  formatLabel(value: number) {
    return value + '☆';
  }
}
