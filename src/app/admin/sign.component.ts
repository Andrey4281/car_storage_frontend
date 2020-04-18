import {Component} from "@angular/core";

@Component({
  templateUrl: 'signin.component.html'
})
export class SignComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
}
