import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {StoreFirstGuard} from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent,
        canActivate: [StoreFirstGuard]},
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/home" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
