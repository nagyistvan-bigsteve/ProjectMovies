import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Movie } from './movies.models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  loadMovies() {
    return this.http.get<Movie[]>(this.baseUrl + 'api/movies');
  }

  public saveMovie(movie: Movie) {
    return this.http.post(this.baseUrl + 'api/movies', movie);
  }

  deleteMovie(movie: Movie) {
    return this.http.delete(this.baseUrl + 'api/movies/' + movie.id);
  }

  loadMoviesById(id) {
    return this.http.get<Movie>(this.baseUrl + 'api/movies/' + id);
  }

  updateMovie(id, movie: Movie) {
    return this.http.put(this.baseUrl + 'api/movies/' + id, movie);
  }
}
