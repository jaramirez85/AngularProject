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
  pokeListOri:IPokeList;
  pokeListResults: any[];

  detailLink:string="../detail";
  rowsPerPage:number=20;

  private _pageNumber:number=1;
  get pageNumber():number{
    return this._pageNumber;
  }
  set pageNumber(value:number){
    this.slicePokemons(value);
    this._pageNumber=value;
  }
  totalSize:number;

   slicePokemons(currentPage:number) {
    this.pokeList.results = this.pokeListResults.slice();

    let initialOff=(currentPage-1)*this.rowsPerPage;
    let finalOff= initialOff + this.rowsPerPage -1 ;

    if(finalOff > this.totalSize)
      finalOff = this.totalSize;

    console.log("INIT: "+initialOff+" FINAL "+finalOff);

    this.pokeList.results= this.pokeList.results.slice(initialOff,finalOff);

  }

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
        this.totalSize=list.results.length;
        this.pokeList=list;
        this.pokeListResults = list.results.slice();
        this.slicePokemons(1);
        console.log("TAMAÑO LISTA: "+this.pokeList.results.length);

      });
  }
}
