import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { RouterModule } from "@angular/router";
import { routes} from './routes.poke-main';

@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokeMainModule { }
