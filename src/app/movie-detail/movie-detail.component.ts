import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public movieId: number;

  constructor(private movieService: MoviesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.movie = this.movieService.getMovieById();
  }

}
