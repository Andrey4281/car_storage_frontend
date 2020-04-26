import {Component, OnDestroy, OnInit} from "@angular/core";
import {Advert} from "../model/advert.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  templateUrl: 'advert-edit.component.html'
})
export class AdvertEditComponent {
  advert: Advert;

  editForm = this.fb.group({
    status: [],
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
    if (this.advert.id !== null && this.advert.id !== undefined) {
      this.updateForm(this.advert);
    }
  }

  updateForm(advert: Advert): void {
    this.editForm.patchValue({
      status: this.showStatus(advert.status),
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
