import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ModelModule} from "../model/model.module";
import {AdvertModule} from "../advert/advert.module";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, ModelModule, AdvertModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
