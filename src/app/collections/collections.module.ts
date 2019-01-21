import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";
import { CollectionModalContentComponent } from './components/collection-modal-content/collection-modal-content.component';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollectionPokemonsComponent } from './containers/collection-pokemons/collection-pokemons.component';

@NgModule({
  declarations: [CollectionListComponent, CollectionModalContentComponent, CollectionPokemonsComponent],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CollectionsModule { }
