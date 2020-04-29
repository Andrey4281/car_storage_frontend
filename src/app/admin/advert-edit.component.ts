import {Component, OnDestroy, OnInit} from "@angular/core";
import {Advert} from "../model/advert.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from "@angular/forms";
import {faBackspace, faFilm} from "@fortawesome/free-solid-svg-icons";
import {AdvertService} from "../model/advert.service";
import {Car} from "../model/car.model";

@Component({
  templateUrl: 'advert-edit.component.html'
})
export class AdvertEditComponent {
  deleteIcon = faBackspace;

  advert: Advert;
  fileList: File[] = [];
  deleteFileList: number[] = [];

  editForm = this.fb.group({
    id: [],
    status: [],
    description: [null, [Validators.required]],
    category: [null, [Validators.required]],
    brand: [null, [Validators.required]],
    engine: [null, [Validators.required]],
    transmission: [null, [Validators.required]],
    carcass: [null, [Validators.required]]
  });

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              protected advertService: AdvertService) {}

  initialize(): void {
    if (this.advert.id !== null && this.advert.id !== undefined) {
      this.updateForm(this.advert);
    }
  }

  updateForm(advert: Advert): void {
    this.editForm.patchValue({
      id: advert.id,
      status: this.showStatus(advert.status),
      description:  advert.description,
      category: advert.car.category,
      brand: advert.car.brand,
      engine: advert.car.engine,
      transmission: advert.car.transmission,
      carcass: advert.car.carcass
    });
  }

  createFromForm(): Advert {
    const currentCar: Car = {
      ...new Car(),
      category: this.editForm.get(['category'])!.value,
      brand: this.editForm.get(['brand'])!.value,
      engine: this.editForm.get(['engine'])!.value,
      transmission: this.editForm.get(['transmission'])!.value,
      carcass: this.editForm.get(['carcass'])!.value
    }
    return {
      ...new Advert(),
      id: this.editForm.get(['id'])!.value,
      status: this.editForm.get(['status'])!.value,
      description: this.editForm.get(['description'])!.value,
      car: currentCar
    };
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  save(): void {
    let currentAdvert: Advert = this.createFromForm();
    console.warn(currentAdvert);
    if (currentAdvert.id !== null && currentAdvert.id !== undefined) {
      console.warn("Обновление объявления");
    } else {
      console.warn("Создание объявления");
      this.advertService.createAdverts(currentAdvert, this.fileList).subscribe(res=>{
        console.warn(res.body);
      })
    }
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

  /**
   * добавление файлов для загрузки
   * @param event
   */
  setFileData(event): void {
    this.fileList.push(event.target.files.item(0));
  }

  /**
   * удаление выбранных файлов
   * @param file
   */
  cleanFile(file: File): void {
    this.fileList = this.fileList.filter(obj => obj !== file);
  }

}
