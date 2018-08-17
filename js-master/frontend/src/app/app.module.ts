import { EjemploDialogo } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EjemploDialogo,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [EjemploDialogo],
  bootstrap: [AppComponent]
})
export class AppModule { }
