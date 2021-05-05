import { Component, Inject, OnInit } from '@angular/core';
import { Movie } from './movies.models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html'
})
export class MoviesDetailsComponent implements OnInit {

  public movie: Movie;
  public params;

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.params = params;
      this.loadMovies();
    });
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: ActivatedRoute, private routers: Router)
  {}

  loadMovies() {
    this.http.get<Movie>(this.baseUrl + 'api/movies/' +this.params.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }
  counter(i: number) {
    return new Array(i);
  }
  public backToList() {
    this.routers.navigateByUrl("/movies");
  }
}
