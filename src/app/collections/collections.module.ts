import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCollectionsComponent } from './containers/poke-collections/poke-collections.component';
import { RouterModule } from "@angular/router";
import { routes} from './routes.collection';

@NgModule({
  declarations: [PokeCollectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class CollectionsModule { }
