import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';


@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  _id:string;
  _pokemon:any;
  images:string[] 
  currentRate:number;

  constructor(private route:ActivatedRoute,private pokeService:PokemonsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
         this._id=params.id;
      }
    );
    this._pokemon=this.pokeService.getPokemonById(this._id).subscribe(
      (response:any)=>{
        this._pokemon=response;
        this.images=[
                    response.sprites.front_default,
                    response.sprites.back_default,
                    response.sprites.front_shiny,
                    response.sprites.back_shiny
                  ]
      },
        error=>console.log(`An error has ocurred querying Pokemon with id ${this._id}: ${error}`)
    )



  }

}
