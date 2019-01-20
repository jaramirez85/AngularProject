import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CollectionsService } from 'src/app/collections/services/collections.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  _pokeResult: {name: string, url: string};
  _poke: any;
  collectiosList: any[] = [];
  @Input() detailLink:string;

  @Input()
  get poke(): {name: string, url: string}{
    return this._pokeResult;
  }

  set poke(result: {name: string, url: string}){
    this.pokeService.getPokemonByUrl(result.url)
    .subscribe(
      pokemon => {
        this._poke = pokemon;
      }
    );
  }

  constructor(private pokeService: PokemonsService,
    private authFire: AngularFireAuth,
    private collectionService: CollectionsService) { }

  ngOnInit() {
    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.collectionService.listCollections(user)
            .subscribe(
              list => {
                this.collectiosList = list;
              }
            );
        }
      }
    );
  }

  addFavorite(book) {
    this.pokeService.addFavorite(book);
  }

  addToCollection(poke) {
    this.collectionService.addCollection(poke);
  }

}
