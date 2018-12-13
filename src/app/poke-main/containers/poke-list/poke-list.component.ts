import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { IPokeList } from '../../models/interfaces/poke-list';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList: IPokeList;
  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
    this.loadAllPokemons();

    this.pokeService.getSearchPokemons()
    .subscribe(
      pokeToSearch => {
        if (pokeToSearch) {
          this.pokeService.getPokemonByName(pokeToSearch).subscribe(
            pokeInfo => {
              this.pokeList = {
                count: 1,
                next: null,
                previous: null,
                results : []
              };
              if (pokeInfo) {
                this.pokeList.results.push({
                  name : pokeInfo.name,
                  url: `https://pokeapi.co/api/v2/pokemon/${pokeInfo.id}/`
                });
              }
            }
          );
        } else {
          this.loadAllPokemons();
        }
      }
    );
  }


  private loadAllPokemons() {
    this.pokeService.list()
      .subscribe(list => {
        this.pokeList = list;
      });
  }
}
