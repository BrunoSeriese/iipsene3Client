import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Content} from "./content.interface";


@Injectable()
export class ContentModel {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/v1/content';
  }

  public findAll(): Observable<Content[]> {
    return this.http.get<Content[]>(this.usersUrl);
  }

  public save(content: Content) {
    return this.http.post<Content>(this.usersUrl, content);
  }
}
