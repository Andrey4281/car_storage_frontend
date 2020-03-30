import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advert} from "./advert.model";

const PROTOCOL = "http";
const PORT = 8080;
/**
 * Rest client for getting data
 */
@Injectable({ providedIn: 'root' })
export class AdvertService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api`;
  }

  getProducts(): Observable<HttpResponse<Advert[]>> {
    return this.http.get<HttpResponse<Advert[]>>(this.baseUrl + '/adverts');
  }
}
