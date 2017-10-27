import { Injectable } from '@angular/core';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {
  public movieList: Array<Movie>;
  public movie: Movie;

  constructor() {
    this.movieList = Movies;
  }

  public getMovies(): Array<Movie> {
    return this.movieList;
  }

  public getMovieById(id: number) {
    this.movieList.forEach(movie => {
      let movieId
      if (movie.id === id) { return movie };
    });
  }
}
