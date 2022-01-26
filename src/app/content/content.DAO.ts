import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Content} from "./content";
import {LoginService} from "../admin/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ContentDAO {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient,
              private loginService: LoginService) {
  }

  public getAll(): Observable<Content[]> {
    return this.http
      .get<Content[]>(this.baseURL + "/contents");
  }

  public addAllContent(contents: Content[], parentIds: number[]) {
    this.deleteAll().subscribe(() => {
        this.addContent(contents, parentIds);
    });
  }

  public deleteAll(): Observable<any> {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .delete(this.baseURL + '/contents/all', requestOptions)
  }

  public addContent(contents: Content[], parentIds: number[]): void {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    let bodies: any[] = [];
    for(let i in contents) {
      let body: any = {
        "id": contents[i].id,
        "value": contents[i].value,
        "type": contents[i].type,
        "answers": contents[i].answers,
        "parentNodeId": parentIds[i]
      }
      bodies.push(body);
    }
    this.http
      .post(this.baseURL + "/contents", bodies, requestOptions)
      .subscribe();
  }
}
