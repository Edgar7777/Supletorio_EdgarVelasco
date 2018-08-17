import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: []
})
/*
const routes: Routes = [
  { path: 'page1', component: page1 },
  { path: 'page1', component: page2 },
  { path: 'page1', component: page3 }
];*/
export class AppRoutingModule {


}
