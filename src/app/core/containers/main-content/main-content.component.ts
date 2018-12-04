import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from "src/app/alerts/services/messages.service";
import { IMessage } from "src/app/alerts/models/interfaces/message";
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  books: any[] = [];

  constructor(private pokemonsService: PokemonsService, private msgService: MessagesService) { }

  ngOnInit() {
    this.getPokemons();
    window.addEventListener('online', this.updateConnection.bind(this));
    window.addEventListener('offline', this.updateConnection.bind(this));
  }

  getPokemons(): void {
    console.log('.......hola');
    this.pokemonsService.getPokemons().subscribe(pokemons => this.books = pokemons);
    this.msgService.getMessage().subscribe(
      (message: IMessage) => {
        console.log(message);
        if (message.msg && message.type == 'searchBook'){
          console.log('entra if');
          this.pokemonsService.getPokemonsByTittle(message.msg).subscribe(pokemons => {
            console.log('getPokemonsByTittle result....');
            console.log(pokemons.length);
            this.books = pokemons;
          });
        } else {
          this.pokemonsService.getPokemons().subscribe(pokemons => {
            this.books = pokemons;
          console.log('carga todos result....');
            console.log(pokemons.length);
          });
        }
      }
    )
    
  }

  updateConnection(event) {
    let msg: IMessage;

    if(event.type == 'online') {
      msg = {msg: 'Se ha establecido conexión de red', type: 'success'};
    }else if(event.type == 'offline') {
      msg = {msg: 'Se ha perdido la conexión de red', type: 'error'};
    }

    this.msgService.message(msg);
  }


  
}
