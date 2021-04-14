import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {
  public movies: Movie[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie[]>(baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}

interface Movie {
  id: string;
  name: string;
  genre: string;
  star: number;
}
