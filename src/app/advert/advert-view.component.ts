import {Component, OnDestroy, OnInit} from "@angular/core";
import {Advert} from "../model/advert.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  templateUrl: 'advert-view.component.html'
})
export class AdvertViewComponent implements OnInit, OnDestroy {
  advert: Advert;

  editForm = this.fb.group({
    status: [],
    login: [],
    phone: [],
    created: [],
    description: [],
    category: [],
    brand: [],
    engine: [],
    transmission: [],
    carcass: []
  });

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder) {}

  initialize(): void {
    console.warn(this.advert.status);
    this.updateForm(this.advert);
  }

  updateForm(advert: Advert): void {
    this.editForm.patchValue({
      status: this.showStatus(advert.status),
      login: advert.user.login,
      phone: advert.user.phone,
      created: advert.created,
      description:  advert.description,
      category: advert.car.category,
      brand: advert.car.brand,
      engine: advert.car.engine,
      transmission: advert.car.transmission,
      carcass: advert.car.carcass
    });
  }

  ngOnInit(): void {
    console.warn("Init");
  }

  ngOnDestroy(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  save(): void {

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
}
