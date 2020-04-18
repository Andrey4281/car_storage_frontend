import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AppSettings} from "../app.settings";
import {LoginUser} from "./login-user.model";
import {Observable} from "rxjs";
import {NewUserResponse} from "./new-user-response.model";

@Injectable({ providedIn: 'root' })
export class AdminService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/user/`;
  }

  saveUser(user: LoginUser): Observable<HttpResponse<NewUserResponse>> {
    return this.http.post<NewUserResponse>(this.baseUrl + 'signup', user, { observe: 'response' });
  }
}
