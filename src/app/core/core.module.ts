import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderAsideLeftComponent } from './components/header-aside-left/header-aside-left.component';
import { TopSearchFormComponent } from './components/top-search-form/top-search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailPipePipe } from './component/email-pipe.pipe';
import { RouterModule } from '@angular/router';
import { DetailBookComponent } from './containers/detail-book/detail-book.component';
import { routes } from './routes.core';

@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, AsideLeftComponent, MainContentComponent, MainMenuComponent, HeaderAsideLeftComponent, TopSearchFormComponent, EmailPipePipe, DetailBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
