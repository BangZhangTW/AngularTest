import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {HttpService} from "./http-service";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [HttpClientModule, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
