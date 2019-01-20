import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes } from "./routes.poke";
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailComponent } from './containers/poke-detail/poke-detail.component';
import { ImageSlideComponent } from './components/image-slide/image-slide.component';
import { PokeRatingComponent } from './components/poke-rating/poke-rating.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokeListComponent, PokeCardComponent, PokeDetailComponent, ImageSlideComponent, PokeRatingComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PokeMainModule { }
