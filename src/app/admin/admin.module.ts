import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from "./signin.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {SignupComponent} from "./signup.component";
import {TextMaskModule} from "angular2-text-mask";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "./auth.guard";
import { NotifierModule } from "angular-notifier";
import {AdvertModule} from "../advert/advert.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

let routing = RouterModule.forChild([
  { path: "signin", component: SigninComponent },
  {path: "main", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "signup", component: SignupComponent},
  { path: "**", redirectTo: "signin" }
]);

@NgModule({
  imports: [FormsModule, routing, TextMaskModule, ReactiveFormsModule, CommonModule, NotifierModule, AdvertModule, NgbPaginationModule],
  declarations: [SigninComponent, AdminComponent, SignupComponent]
})
export class AdminModule { }
