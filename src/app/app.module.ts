import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrbitComponent } from './sites/orbit/orbit.component';
import { AerisComponent } from './sites/aeris/aeris.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrbitComponent,
    AerisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
