import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies.models';
import { MoviesService } from './movies-services';

@Component({
  selector: 'app-movies',
  styleUrls: ['./movies.component.css'],
  templateUrl: './movies.component.html'
})
export class MoviesComponent {
  public movies: Movie[];

  columnsToDisplay: string[] = ['name', 'genre', 'star', 'actions'];

  constructor(private movieService: MoviesService) {
    this.loadMovies();
  }

  public deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie).subscribe(result => {
      this.loadMovies();
    }, error => console.error(error))
  }

  loadMovies() {
    this.movieService.loadMovies().subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}
