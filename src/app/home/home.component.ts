import {Component, OnDestroy, OnInit} from "@angular/core";
import {AdvertService} from "../model/advert.service";
import {Advert} from "../model/advert.model";

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  adverts?: Advert[];

  constructor(protected advertService: AdvertService){}


  ngOnInit(): void {
    this.advertService.getProducts().subscribe(res=>{
      this.adverts = res.body;
      console.warn(this.adverts);
    });
  }

  ngOnDestroy(): void {
  }
}
