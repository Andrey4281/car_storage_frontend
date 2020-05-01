import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from "./signin.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {SignupComponent} from "./signup.component";
import {TextMaskModule} from "angular2-text-mask";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "./auth.guard";
import {AdvertEditComponent} from "./advert-edit.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NotifierModule } from "angular-notifier";

let routing = RouterModule.forChild([
  { path: "signin", component: SigninComponent },
  {path: "main", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "signup", component: SignupComponent},
  { path: "**", redirectTo: "signin" }
]);

@NgModule({
  imports: [FormsModule, routing, TextMaskModule, ReactiveFormsModule, CommonModule, NgbModule, FontAwesomeModule, NotifierModule],
  declarations: [SigninComponent, AdminComponent, SignupComponent,AdvertEditComponent],
  entryComponents: [AdvertEditComponent]
})
export class AdminModule { }
