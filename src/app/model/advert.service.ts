import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advert} from "./advert.model";
import {AppSettings} from "../app.settings";

/**
 * Rest client for getting data
 */
@Injectable({ providedIn: 'root' })
export class AdvertService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/api`;
  }

  getAdverts(req?: HttpParams): Observable<HttpResponse<Advert[]>> {
    return this.http.get<Advert[]>(this.baseUrl + '/adverts', { params: req, observe: 'response' });
  }
}
