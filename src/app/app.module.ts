import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Directive, Input, ElementRef, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsModule } from './products/products.module';
import { ScreenModule } from './screen/screen.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'
// import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ScreenModule,
    FormsModule,
    HttpClientModule,

    // NgForm,
    // ReactiveFormsModule
    

    // NgbModule,
    // NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
