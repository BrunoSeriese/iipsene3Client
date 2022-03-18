import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: String = "https://ipsen3-api.herokuapp.com/api/v1";
  private _token: String = "";

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<string> {
    let body: unknown = {
      "email": email,
      "password": password
    }
    return this.http
      .post(this.baseURL + "/auth/login", body, {responseType: "text"});
  }

  public get token(): String {
    return this._token;
  }

  public set token(token: String) {
    this._token = token;
  }
}
