import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routes } from "./routes.auth";
import { reducers} from './reducers';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlertsModule } from '../alerts/alerts.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    AlertsModule
  ]
})
export class AuthModule { }
