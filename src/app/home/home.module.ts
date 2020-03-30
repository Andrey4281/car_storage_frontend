import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ModelModule} from "../model/model.module";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, ModelModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
