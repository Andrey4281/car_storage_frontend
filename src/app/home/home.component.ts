import {Component, OnDestroy, OnInit} from "@angular/core";
import {AdvertService} from "../model/advert.service";
import {Advert} from "../model/advert.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AdvertViewComponent} from "../advert/advert-view.component";
import {HttpParams} from "@angular/common/http";
import {AdvertFiltersComponent} from "../advert/advert-filters.component";
import {FilterModel} from "../model/filter.model";

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  adverts?: Advert[];
  filters?: FilterModel;

  totalItems:number = 20;
  itemsPerPage:number = 10;
  page:number = 1;

  constructor(protected advertService: AdvertService,
              protected modalService: NgbModal){
    this.filters = new FilterModel();
    this.filters.statusFilter = null;
    this.filters.categoryFilter = null;
    this.filters.dateFilter = null;
  }


  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(page?: number) {
    let pageToLoad: number = page ? page: this.page;
    let params: HttpParams = new HttpParams();
    params = params.set('page', (pageToLoad - 1).toString());
    params = params.set('size', this.itemsPerPage.toString());

    if (this.filters.categoryFilter) {
      params = params.set('carCategory', this.filters.categoryFilter);
    }
    if (this.filters.statusFilter !== null) {
      params = params.set('advertStatus', this.filters.statusFilter);
    }
    if (this.filters.dateFilter) {
      params = params.set('countDay', this.filters.dateFilter);
    }

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

  showFilterDialog(): void {
    const modalRef = this.modalService.open(AdvertFiltersComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.filters = this.filters;
    modalRef.result.then(
      result => {
        if (result) {
          this.filters = result;
          console.warn("Filter =" + this.filters);
          this.page = 1;
          this.loadPage();
        }
      }
    );
  }

  deleteFilters(): void {
    this.filters.statusFilter = null;
    this.filters.categoryFilter = null;
    this.filters.dateFilter = null;
    this.page = 1;
    this.loadPage();
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
