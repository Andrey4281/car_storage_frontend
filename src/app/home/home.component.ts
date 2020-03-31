import {Component, OnDestroy, OnInit} from "@angular/core";
import {AdvertService} from "../model/advert.service";
import {Advert} from "../model/advert.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AdvertComponent} from "../advert/advert.component";

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  adverts?: Advert[];

  constructor(protected advertService: AdvertService,
              protected modalService: NgbModal){}


  ngOnInit(): void {
    this.advertService.getProducts().subscribe(res=>{
      this.adverts = res.body;
      console.warn(this.adverts);
    });
  }

  showAdvertDialog(advert: Advert):void {
    const modalRef = this.modalService.open(AdvertComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.advert = advert;
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

  ngOnDestroy(): void {
  }
}
