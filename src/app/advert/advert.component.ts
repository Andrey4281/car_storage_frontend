import {Component, OnDestroy, OnInit} from "@angular/core";
import {Advert} from "../model/advert.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'advert.component.html'
})
export class AdvertComponent implements OnInit, OnDestroy {
  advert: Advert;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    console.warn("Init");
  }

  ngOnDestroy(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }
}
