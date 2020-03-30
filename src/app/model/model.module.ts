import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AdvertService} from './advert.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [AdvertService]
})
export class ModelModule { }
