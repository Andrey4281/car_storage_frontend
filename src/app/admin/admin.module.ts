import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  {path: "main", component: AdminComponent},
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [FormsModule, routing],
  declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }
