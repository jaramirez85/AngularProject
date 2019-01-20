import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { trigger,state,style,transition,animate } from "@angular/animations";
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { Store, select} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '50px',
      })),
      state('open', style({
        width: '100%'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ]),
    trigger('asideAnimationMobile', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: '100%'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])

  ]
})
export class CoreComponent implements OnInit {

  state: string;
  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));

  constructor(private pokeService: PokemonsService, private store: Store<fromRoot.State>) { 
    this.stateAside$.subscribe(
      state => {
        this.state = state;
      }
    );
  }

  ngOnInit() {
  }

  searchBook(data: string) {
    this.pokeService.searchPokemons(data);
  }

  /*eventAside(data: string) {
    this.state = data;
  }*/

}
