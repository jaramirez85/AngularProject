import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CoreModule} from './core/core.module';
import { RouterModule } from "@angular/router";
import { AuthModule} from "./auth/auth.module";
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data-api/books-dummy-api';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { routes } from "./routes";
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducers, metaReducer} from './reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(routes),
    NgbModule,
    AuthModule,
    HttpModule,
    HttpClientModule,
    /** HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 3000
      }
    ),*/
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseConfig.projectId),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers: metaReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Bzg Poke App', //Id de la App en el plugin
      logOnly: environment.production, //En Prod solo permite ver logs
      maxAge: 30 //Historial de estados
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
