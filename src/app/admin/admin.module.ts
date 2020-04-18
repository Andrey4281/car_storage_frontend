import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from "./signin.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {SignupComponent} from "./signup.component";
import {TextMaskModule} from "angular2-text-mask";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "./auth.guard";

let routing = RouterModule.forChild([
  { path: "signin", component: SigninComponent },
  {path: "main", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "signup", component: SignupComponent},
  { path: "**", redirectTo: "signin" }
]);

@NgModule({
  imports: [FormsModule, routing, TextMaskModule, ReactiveFormsModule, CommonModule],
  declarations: [SigninComponent, AdminComponent, SignupComponent],
  providers: [AuthGuard]
})
export class AdminModule { }
