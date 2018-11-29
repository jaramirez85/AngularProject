import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipePipe } from './pipes/email-pipe.pipe';

@NgModule({
  declarations: [EmailPipePipe],
  imports: [
    CommonModule
  ],
  exports: [
    EmailPipePipe
  ]
})
export class ApplicationPipesModuleModule { }
