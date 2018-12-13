import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes } from "./routes.poke";
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailComponent } from './containers/poke-detail/poke-detail.component';

@NgModule({
  declarations: [PokeListComponent, PokeCardComponent, PokeDetailComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class PokeMainModule { }
