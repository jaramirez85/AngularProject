import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-poke-rating',
  templateUrl: './poke-rating.component.html',
  styleUrls: ['./poke-rating.component.css'],
  providers: [NgbRatingConfig]
})
export class PokeRatingComponent implements OnInit {

  pokemonRate:number;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
  }
  ngOnInit() {
  }

}
