import { Routes } from "@angular/router";
import { PokeCollectionsComponent } from "./containers/poke-collections/poke-collections.component";


export const routes: Routes =[
    {
        path:'list',
        component: PokeCollectionsComponent
    },
            {
                path:"", redirectTo: 'list', pathMatch:'full'
            }

];