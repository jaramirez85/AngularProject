import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionsService } from "../../services/collections.service";
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-pokemons',
  templateUrl: './collection-pokemons.component.html',
  styleUrls: ['./collection-pokemons.component.css']
})
export class CollectionPokemonsComponent implements OnInit {

  _key : any;
  pokeList: Observable<any[]>;
  user: any;

  constructor(private authFire: AngularFireAuth, private route: ActivatedRoute, private collectionService: CollectionsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this._key = params.key;
      }
    );

    this.authFire.authState.subscribe(
      user => {
        this.user= user;
        if (user) {
    this.pokeList = this.collectionService.getPokemonsByCollection(user, this._key).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
        }
      });
  }

  removePokemon( keyPokemon : any){
    this.collectionService.removePokemonOfCollection(this.user, this._key, keyPokemon );
  }

}
