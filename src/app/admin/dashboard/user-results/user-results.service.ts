import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../../login/login.service";
import {Observable} from "rxjs";
import {ContentModel} from "../../../content/content.model";
import {UserResult} from "./user-result.model";

@Injectable({
  providedIn: 'root'
})
export class UserResultsService {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient,
              private loginService: LoginService) {
  }

  public getAll(): Observable<UserResult[]> {
    let requestOptions: { headers : HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .get<UserResult[]>(this.baseURL + "/user-results", requestOptions);
  }

  public getAllOfPastWeek(): Observable<UserResult[]> {
    let requestOptions: { headers : HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .get<UserResult[]>(this.baseURL + "/user-results/past-week", requestOptions);
  }

  public getAllOfPastMonth(): Observable<UserResult[]> {
    let requestOptions: { headers : HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .get<UserResult[]>(this.baseURL + "/user-results/past-month", requestOptions);
  }

  public getAllOfPastYear(): Observable<UserResult[]> {
    let requestOptions: { headers : HttpHeaders } = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .get<UserResult[]>(this.baseURL + "/user-results/past-year", requestOptions);
  }

  public create(result: string): void {
    this.http
      .post(this.baseURL + "/user-results", result)
      .subscribe();
  }
}
