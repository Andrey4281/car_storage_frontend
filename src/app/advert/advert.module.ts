import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {AdvertComponent} from "./advert.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [FormsModule, BrowserModule, NgbModule],
  declarations: [AdvertComponent],
  entryComponents: [AdvertComponent]
})
export class AdvertModule { }
