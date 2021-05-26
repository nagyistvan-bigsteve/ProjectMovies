import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from './movies.models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MoviesService } from './movies-services';

@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html'
})
export class MoviesUpdateComponent implements OnInit {

  public movie: Movie = <Movie>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadMovies();
     });
  }
  constructor(private movieService: MoviesService, private routers: ActivatedRoute, private router: Router)
  {}

  loadMovies() {
    this.movieService.loadMoviesById(this.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }
  public saveMovie() {
    this.movieService.updateMovie(this.movie.id, this.movie).subscribe(result => {
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
