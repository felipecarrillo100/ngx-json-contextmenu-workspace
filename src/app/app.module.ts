import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxJsonContextmenuModule} from "ngx-json-contextmenu";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonContextmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
