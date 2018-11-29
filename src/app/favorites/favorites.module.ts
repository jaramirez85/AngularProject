import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeFavoritesComponent } from './containers/poke-favorites/poke-favorites.component';

@NgModule({
  declarations: [PokeFavoritesComponent],
  imports: [
    CommonModule
  ]
})
export class FavoritesModule { }
