import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FilterModel} from "../model/filter.model";

@Component({
  templateUrl: 'advert-filters.component.html'
})
export class AdvertFiltersComponent {
  filters?: FilterModel = null;

  constructor(public activeModal: NgbActiveModal)
  {}

  clear(): void {
    this.activeModal.dismiss();
  }

  useFilter(): void {
    this.activeModal.close(this.filters);
  }
}
