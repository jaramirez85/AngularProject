import { Routes } from "@angular/router";
import { CollectionListComponent } from "./containers/collection-list/collection-list.component";
import { CollectionPokemonsComponent } from "./containers/collection-pokemons/collection-pokemons.component";

export const routes:Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: 'collectionDetail/:name',
        component: CollectionPokemonsComponent,
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];