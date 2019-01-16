import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { copyAnimationEvent } from '@angular/animations/browser/src/render/shared';


@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  _id: string;
  _pokemon: any;
  images: string[]
  abilities: Array<any> = new Array()
  evolution: Array<any> = new Array()

  constructor(private route: ActivatedRoute, private pokeService: PokemonsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this._id = params.id;
      }
    );
    this._pokemon = this.pokeService.getPokemonById(this._id).subscribe(
      (response: any) => {
        this._pokemon = response;
        this.images = [
          response.sprites.front_default,
          response.sprites.back_default,
          response.sprites.front_shiny,
          response.sprites.back_shiny
        ];
        this.setAbilities(response);
        this.setEvolutionChain(response)
      },
      error => console.log(`An error has ocurred querying Pokemon with id ${this._id}: ${error}`)
    )

  }

  private setAbilities(response: any) {
    let abilities: any[] = response.abilities;
    abilities.forEach(ability => {
      this.pokeService.getPokemonByUrl(ability.ability.url).subscribe((resp: any) => {
        this.abilities.push({
          name: ability.ability.name,
          description: resp.effect_entries[0].short_effect
        });
      })

    });
  }

  private setEvolutionChain(response: any) {
    this.pokeService.getPokemonByUrl(response.species.url).subscribe(
      (r: any) => {
        this.pokeService.getPokemonByUrl(r.evolution_chain.url).subscribe((evo: any) => {
          this.processEvolutionChain(evo.chain);
        })
      }
    )
  }

  private processEvolutionChain(chain:any){
    this.processSpecie(chain.species);
    chain.evolves_to.forEach(ch=>{
      this.processEvolutionChain(ch);
    })
  }

  private processSpecie(specie:any){
    this.pokeService.getPokemonByUrl(specie.url).subscribe(
      (spec: any) => {

        spec.varieties.forEach(variety => {
          if (variety.pokemon.name === specie.name) {
            this.evolution.push({
              name: variety.pokemon.name,
              url: variety.pokemon.url
            })
          }
        });
      }
    );
  }

}
