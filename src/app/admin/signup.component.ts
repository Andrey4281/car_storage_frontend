import {Component} from "@angular/core";
import {AdminService} from "./admin.service";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginUser} from "../model/login-user.model";
import {NewUserResponse} from "../model/new-user-response.model";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  phoneMask = ['7', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  newUserResponse: NewUserResponse = null;

  userForm = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]],
    phone: [null, [Validators.required]]
  });

  constructor(protected adminService: AdminService,
              private fb: FormBuilder,
              private router: Router) {}

  saveUser(): void {
    this.adminService.signUp(this.createFromForm()).subscribe(res=>{
      this.newUserResponse = res.body;
      if (this.newUserResponse.success) {
        this.router.navigateByUrl("/");
      }
    })
  }

  private createFromForm(): LoginUser {
    return {
      ...new LoginUser(),
      login: this.userForm.get(['login'])!.value,
      password: this.userForm.get(['password'])!.value,
      phone: this.userForm.get(['phone'])!.value
    }
  }
}
