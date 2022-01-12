import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Content} from "./content.model";


@Injectable({
  providedIn: 'root'
})
export class ContentDAO {
  private baseURL: String = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Content[]> {
    return this.http
      .get<Content[]>(this.baseURL + "/contents");
  }

  public getContent(){
    // var contents[ContentModel] = this.findAll();

  }


}
