import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AdminService} from "./admin.service";
import {AdvertService} from "../model/advert.service";
import {HttpParams} from "@angular/common/http";
import {Advert} from "../model/advert.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AdvertEditComponent} from "./advert-edit.component";

@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {
  adverts?: Advert[];
  currentSuccessMessage?: string = null;
  currentErrorMessage?: string = null;

  constructor(private adminService: AdminService,
              private router: Router,
              protected advertService: AdvertService,
              protected modalService: NgbModal) { }

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

  edit(advert: Advert):void {
    const modalRef = this.modalService.open(AdvertEditComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.advert = advert;
    modalRef.componentInstance.initialize();
  }

  create(): void {
    let advert: Advert = new Advert();
    const modalRef = this.modalService.open(AdvertEditComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.advert = advert;
    modalRef.componentInstance.initialize();
    modalRef.result.then(
      result => {
        if (result) {
          this.adverts.push(result);
          this.currentSuccessMessage = `Advert № ${result.id} was created success`;
        } else {
          this.currentErrorMessage = 'Error was appeared during creation of advert';
        }
      },
      () => {}
    );
  }

  delete(id): void {
    this.advertService.deleteAdvert(id).subscribe(res=>{
      if (res.status === 200) {
        this.currentSuccessMessage = `Advert № ${id} was deleted success`;
        this.adverts = this.adverts.filter(obj=>obj.id !== id);
      } else {
        this.currentErrorMessage = `Error was appeared during deleting advert № ${id}`;
      }
    },error => {this.currentErrorMessage = `Error was appeared during deleting advert № ${id}`});
  }

  clearErrorMessage() {
    this.currentErrorMessage = null;
  }

  clearSuccessMessage() {
    this.currentSuccessMessage = null;
  }
}
