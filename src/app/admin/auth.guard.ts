import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AdminService} from "./admin.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router,
              private adminService: AdminService) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (!this.adminService.authenticated()) {
      this.router.navigateByUrl("/admin/signin");
      return false;
    }
    return true;
  }
}
