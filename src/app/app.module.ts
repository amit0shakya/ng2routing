import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Newpage } from './newpage';

import { AppRouter } from './route';

@NgModule({
  imports:      [ BrowserModule,AppRouter ],
  declarations: [ AppComponent,Newpage ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
