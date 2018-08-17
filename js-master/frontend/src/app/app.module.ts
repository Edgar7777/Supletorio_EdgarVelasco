import { EjemploDialogo } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EjemploDialogo
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
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EjemploDialogo],
  bootstrap: [AppComponent]
})
export class AppModule { }
