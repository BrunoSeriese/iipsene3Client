import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ContentModel} from "./content.model";
import {Content} from "./content.interface";
import {ContentService} from "./content.service";
import {Question} from "./content-component/question/question.model";
import {Video} from "./content-component/video/video.model";
import {Result} from "./content-component/result/result.model";
import {Explanation} from "./content-component/explanation/explanation.model";
import {ContentTreeService} from "./tree/content-tree.service";


@Injectable({
  providedIn: 'root'
})
export class ContentDAO {
  private baseURL: String = "http://localhost:8080/api/v1";
  private contents: Content[];

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<ContentModel[]> {
    return this.http
      .get<ContentModel[]>(this.baseURL + "/contents");
  }

  public createAll(contents: ContentModel[]) {
    let newContents: Content[] = this.convertArray(contents);
  }

  public addContent(content: ContentModel, node: number){
    this.http.post(this.baseURL + '/contents/' + node, content);
  }
  public convertArray(contents: ContentModel[]) {
    let newContents: Content[] = [];
    for (let content of contents) {
      if(content.type == "Question") {
        newContents.push(new Question(content.id, content.value, content.answers));
      } else if(content.type == "Video") {
        newContents.push(new Video(content.id, content.value, content.answers[0]));
      } else if(content.type == "Result") {
        newContents.push(new Result(content.id, content.value, content.answers[0]));
      } else if(content.type == "Explanation") {
        newContents.push(new Explanation(content.id, content.value, content.answers[0]));
      }
    }
    return newContents;
  }




}
