import { Injectable } from '@angular/core';
import {Content} from "./content.interface";
import {Question} from "./question/question.model";
import {Answer} from "./shared/answer/answer.model";
import {Result} from "./result/result.model";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentList: Content[] = [
    new Question(1,"Wil je subsidie voor Mei?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 3),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 2)
    ]),
    new Question(2,"Binnen welke termijn is de subsidie nodig?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 2),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 3)
    ]),
    new Question(3,"Heeft u momenteel een subsidie?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 2),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 4)
    ]),
    new Result(4, "Dit is een resultaat",
      new Answer(1, "Hallo lekker bezig, je hebt een resultaat behaald", null)),
  ];
  private contentId: number = 1;
  private lastContentIdArray: number[] = [];

  constructor() { }

  public setNextContentId(id: number): void {
    this.lastContentIdArray.push(this.contentId);
    this.contentId = id;
  }

  public getLastContentIdArray(): number[] {
    return this.lastContentIdArray;
  }

  public setLastContentId(): void {
    if (!this.isArrayEmpty(this.lastContentIdArray)){
      this.contentId = this.lastContentIdArray.pop();
    }
  }

  public getContent(): Content {
    return this.getContentById(this.contentId);
  }

  public getContentById(id: number): Content {
    let contentList: Content[] = this.contentList;
    for(let content of contentList) {
      if (content.getId() == id) {
        return content;
      }
    }
  }

  public isArrayEmpty(array: any[]): boolean {
    return array == null || array.length == 0;
  }

}
