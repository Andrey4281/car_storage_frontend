import {Component, OnDestroy, OnInit} from "@angular/core";
import {AdvertService} from "../model/advert.service";
import {Advert} from "../model/advert.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AdvertViewComponent} from "../advert/advert-view.component";
import {HttpParams} from "@angular/common/http";

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  adverts?: Advert[];

  totalItems:number = 20;
  itemsPerPage:number = 10;
  page:number = 1;

  constructor(protected advertService: AdvertService,
              protected modalService: NgbModal){}


  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(page?: number) {
    let pageToLoad: number = page ? page: this.page;
    let params: HttpParams = new HttpParams();
    params = params.set('page', (pageToLoad - 1).toString());
    params = params.set('size', this.itemsPerPage.toString());
    this.advertService.getAdverts(params).subscribe(res=>{
      this.adverts = res.body;
      this.totalItems = Number(res.headers.get('totalSize'));
      console.warn(this.adverts);
    });
  }

  showAdvertDialog(advert: Advert):void {
    const modalRef = this.modalService.open(AdvertViewComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.advert = advert;
    modalRef.componentInstance.initialize();
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
