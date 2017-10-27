import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public movieList: Array<Movie>;
  public searchText: string;
  title = 'WTT';

  constructor() { }

  ngOnInit() {
  }

}
