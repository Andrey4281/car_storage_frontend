import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdvertViewComponent} from "./advert-view.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AdvertEditComponent} from "./advert-edit.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [FormsModule, CommonModule, NgbModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [AdvertViewComponent, AdvertEditComponent],
  entryComponents: [AdvertViewComponent, AdvertEditComponent]
})
export class AdvertModule { }
