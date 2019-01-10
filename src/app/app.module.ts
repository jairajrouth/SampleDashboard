import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './root/app.component';
import { BodyCardComponent } from './body-section/body-card/body-card.component';
import { BodyTableComponent } from './body-section/body-table/body-table.component';
import { BodyRecentWorksComponent } from './body-section/body-recent-works/body-recent-works.component';

import { FooterComponent } from './body-section/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';







@NgModule({
  declarations: [
    AppComponent,
    BodyCardComponent,
    BodyTableComponent,
    BodyRecentWorksComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
