import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
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
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/api/adverts`;
  }

  getAdverts(req?: HttpParams): Observable<HttpResponse<Advert[]>> {
    return this.http.get<Advert[]>(this.baseUrl, { params: req, observe: 'response' });
  }

  getAdvertById(id?: number): Observable<HttpResponse<Advert>> {
    return this.http.get<Advert>(`${this.baseUrl}/${id}`, {observe: 'response'});
  }

  createAdvert(advert?: Advert, files?: File[]): Observable<HttpResponse<Advert>> {
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
      .post<Advert>(this.baseUrl + '/new', formData, { headers: {'Authorization': `Bearer ${this.adminService.auth_token}`}, observe: 'response' });
  }

  updateAdvert(advert?: Advert, files?: File[], deleteFileList?: number[]): Observable<HttpResponse<Advert>> {
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
    formData.append('deleteFileList', deleteFileList.toString());
    console.warn('Tokken is :' + this.adminService.auth_token);
    return this.http
      .put<Advert>(this.baseUrl + '/edit', formData, { headers: {'Authorization': `Bearer ${this.adminService.auth_token}`}, observe: 'response' });
  }

  deleteAdvert(id?: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.baseUrl + `/delete/${id}`, { headers: new HttpHeaders().set('Authorization', `Bearer ${this.adminService.auth_token}`), observe: 'response' });
  }


}
