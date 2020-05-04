import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdvertViewComponent} from "./advert-view.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AdvertEditComponent} from "./advert-edit.component";
import {CommonModule} from "@angular/common";
import {AdvertFiltersComponent} from "./advert-filters.component";

@NgModule({
  imports: [FormsModule, CommonModule, NgbModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [AdvertViewComponent, AdvertEditComponent, AdvertFiltersComponent],
  entryComponents: [AdvertViewComponent, AdvertEditComponent, AdvertFiltersComponent]
})
export class AdvertModule { }
