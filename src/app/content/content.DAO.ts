import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {ContentModel} from "./content.model";
import {Content} from "./content.interface";
import {ContentService} from "./content.service";
import {Question} from "./content-component/question/question.model";
import {Video} from "./content-component/video/video.model";
import {Result} from "./content-component/result/result.model";
import {Explanation} from "./content-component/explanation/explanation.model";
import {ContentTreeService} from "./tree/content-tree.service";
import {LoginService} from "../admin/login/login.service";


@Injectable({
  providedIn: 'root'
})
export class ContentDAO {
  private baseURL: String = "http://localhost:8080/api/v1";
  private contents: Content[];

  constructor(private http: HttpClient,
              private loginService: LoginService) {
  }

  public getAll(): Observable<ContentModel[]> {
    return this.http
      .get<ContentModel[]>(this.baseURL + "/contents");
  }

  public addContent(content: ContentModel, parentId: number) {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    this.http
      .delete(this.baseURL + '/contents/all', requestOptions);
    this.http
      .post(this.baseURL + '/contents/' + parentId, content, requestOptions);
  }

  public convertToModels(contents: Content[]): ContentModel[] {
    let newContentModels: ContentModel[] = [];
    for (let content of contents) {
      if(content instanceof Question) {
        newContentModels.push(new ContentModel(content.id, content.value, "Question", content.answers));
      } else if(content instanceof Video) {
        newContentModels.push(new ContentModel(content.id, content.value, "Video", content.answers));
      } else if(content instanceof Result) {
        newContentModels.push(new ContentModel(content.id, content.value, "Result", content.answers));
      } else if(content instanceof Explanation) {
        newContentModels.push(new ContentModel(content.id, content.value, "Explanation", content.answers));
      }
    }
    return newContentModels;
  }

  public convertArray(contents: ContentModel[]): Content[] {
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
