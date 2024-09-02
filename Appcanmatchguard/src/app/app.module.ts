import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneappComponent } from './oneapp/oneapp.component';
import { TwoappComponent } from './twoapp/twoapp.component';

@NgModule({
  declarations: [
    AppComponent,
    OneappComponent,
    TwoappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
