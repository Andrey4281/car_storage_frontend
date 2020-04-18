import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignComponent} from "./sign.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {SignupComponent} from "./signup.component";
import {TextMaskModule} from "angular2-text-mask";
import {CommonModule} from "@angular/common";

let routing = RouterModule.forChild([
  { path: "signin", component: SignComponent },
  {path: "main", component: AdminComponent},
  {path: "signup", component: SignupComponent},
  { path: "**", redirectTo: "signin" }
]);

@NgModule({
  imports: [FormsModule, routing, TextMaskModule, ReactiveFormsModule, CommonModule],
  declarations: [SignComponent, AdminComponent, SignupComponent]
})
export class AdminModule { }
