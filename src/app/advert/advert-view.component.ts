import {Component, OnDestroy, OnInit} from "@angular/core";
import {Advert} from "../model/advert.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";
import {AppSettings} from "../app.settings";

@Component({
  templateUrl: 'advert-view.component.html'
})
export class AdvertViewComponent {
  advert: Advert;
  baseUrl: string;

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
              private fb: FormBuilder) {
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/api/attached-files/download/`;
  }

  initialize(): void {
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

  clear(): void {
    this.activeModal.dismiss();
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
