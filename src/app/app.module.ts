import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
