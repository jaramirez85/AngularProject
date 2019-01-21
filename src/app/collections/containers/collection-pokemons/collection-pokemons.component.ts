import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionsService } from "../../services/collections.service";

@Component({
  selector: 'app-collection-pokemons',
  templateUrl: './collection-pokemons.component.html',
  styleUrls: ['./collection-pokemons.component.css']
})
export class CollectionPokemonsComponent implements OnInit {

  _name : string;
  constructor(private route: ActivatedRoute, private collectionService: CollectionsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this._name = params.name;
      }
    );
    
  }

}
