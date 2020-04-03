import {Component} from "@angular/core";

@Component({
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
}
