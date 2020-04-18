import {Component} from "@angular/core";
import {AdminService} from "./admin.service";
import {AdvertService} from "../model/advert.service";
import {LoginUser} from "../model/login-user.model";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'signin.component.html'
})
export class SigninComponent {
  public login: string;
  public password: string;
  public errorMessage: string = null;

  constructor(protected adminService: AdminService,
              private router: Router) {}

  authenticate() {
    this.adminService.signIn(new LoginUser(this.login, this.password))
      .subscribe(res=>{
        console.warn(res.body);
        if (res.ok) {
          this.adminService.auth_token = res.body.token;
          this.router.navigateByUrl("/admin/main");
        } else {
          this.errorMessage = "Authentication Failed";
        }
      }, error => {this.errorMessage = "Authentication Failed";})
  }
}
