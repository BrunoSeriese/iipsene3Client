import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<string> {
    let body: unknown = {
      "email": email,
      "password": password
    }
    return this.http
      .post(this.baseURL + "/auth/login", body, {responseType: "text"});
  }
}
