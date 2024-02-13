import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ClientModule } from './client/client.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ClientModule,
    HttpClientModule,   
    FormsModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }