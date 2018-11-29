import { Routes } from "@angular/router";
import {MainContentComponent} from './containers/main-content/main-content.component'


export const routes: Routes =[
    {
        path:'list',
        component: MainContentComponent
    },
            {
                path:"", redirectTo: 'list', pathMatch:'full'
            }

];