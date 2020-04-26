import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AdminService} from "./admin.service";
import {AdvertService} from "../model/advert.service";
import {HttpParams} from "@angular/common/http";
import {Advert} from "../model/advert.model";

@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {
  adverts?: Advert[];

  constructor(private adminService: AdminService,
              private router: Router,
              protected advertService: AdvertService) { }

  signOut(): void {
    this.adminService.auth_token = null;
    this.adminService.current_user = null;
    this.router.navigateByUrl("/");
  }

  showStatus(flag: boolean): string {
    let result: string;
    if (flag) {
      result = 'Sales';
    } else {
      result = 'New';
    }
    return result;
  }

  ngOnInit(): void {
    console.warn('Current user=' + this.adminService.current_user);
    let params: HttpParams = new HttpParams();
    params = params.set('userLogin', this.adminService.current_user);
    this.advertService.getAdverts(params).subscribe(res=>{
      this.adverts = res.body;
      console.warn(this.adverts)});
  }
}
