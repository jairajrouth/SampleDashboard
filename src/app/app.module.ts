import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './root/app.component';
import { BodyComponent } from './body-section/body/body.component';
import { BodyCardComponent } from './body-section/body-card/body-card.component';
import { BodyTableComponent } from './body-section/body-table/body-table.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    BodyCardComponent,
    BodyTableComponent,
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
