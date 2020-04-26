import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AppSettings} from "../app.settings";
import {LoginUser} from "../model/login-user.model";
import {Observable} from "rxjs";
import {NewUserResponse} from "../model/new-user-response.model";
import {AuthTokenResponse} from "../model/auth-token-response.model";

@Injectable({ providedIn: 'root' })
export class AdminService {
  baseUrl: string;
  auth_token: string = null;
  current_user: string = null;

  constructor(private http: HttpClient) {
    this.baseUrl = `${AppSettings.PROTOCOL}://${location.hostname}:${AppSettings.PORT}/user/`;
  }

  signIn(user: LoginUser): Observable<HttpResponse<AuthTokenResponse>> {
    return this.http.post<AuthTokenResponse>(this.baseUrl + 'signin', user, { observe: 'response' });
  }

  signUp(user: LoginUser): Observable<HttpResponse<NewUserResponse>> {
    return this.http.post<NewUserResponse>(this.baseUrl + 'signup', user, { observe: 'response' });
  }

  authenticated(): boolean {
    return this.auth_token !== null;
  }
}
