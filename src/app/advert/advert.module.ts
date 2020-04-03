import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {AdvertViewComponent} from "./advert-view.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [FormsModule, BrowserModule, NgbModule, ReactiveFormsModule],
  declarations: [AdvertViewComponent],
  entryComponents: [AdvertViewComponent]
})
export class AdvertModule { }
