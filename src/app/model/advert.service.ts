import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advert} from "./advert.model";
import {AppSettings} from "../app.settings";
import {AdminService} from "../admin/admin.service";

/**
 * Rest client for getting data
 */
@Injectable({ providedIn: 'root' })
export class AdvertService {
  baseUrl: string;

  constructor(private http: HttpClient, protected adminService: AdminService) {
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/api`;
  }

  getAdverts(req?: HttpParams): Observable<HttpResponse<Advert[]>> {
    return this.http.get<Advert[]>(this.baseUrl + '/adverts', { params: req, observe: 'response' });
  }

  createAdverts(advert: Advert, files: File[]): Observable<HttpResponse<Advert>> {
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    formData.append(
      'advert',
      new Blob([JSON.stringify(advert)], {
        type: 'application/json'
      })
    );
    console.warn('Tokken is :' + this.adminService.auth_token);
    return this.http
      .post<Advert>(this.baseUrl + '/adverts/new', formData, { headers: {'Authorization': `Bearer ${this.adminService.auth_token}`}, observe: 'response' });
  }
}
