import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Content} from "./content.interface";
import {ContentModel} from "./content.model";


@Injectable()
export class ContentDao {

  private contentUrl: string;

  constructor(private http: HttpClient) {
    this.contentUrl = 'http://localhost:8080/api/v1/content';
  }
  public findAll(): Observable<ContentModel[]> {
    return this.http.get<ContentModel[]>(this.contentUrl);
  }
  public getContent(){
    // var contents[ContentModel] = this.findAll();

  }


}
