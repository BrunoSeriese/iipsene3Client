import { Injectable } from '@angular/core';
import {ContentComponent} from "./content.component";
import {ContentListComponent} from "./content-list/content-list.component";
import {Content} from "./content.interface";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentListComponent: ContentListComponent = new ContentListComponent();
  private contentId: number = 1;
  private lastContentId: number = 1;

  constructor() { }

  public getContentId(): number {
    return this.contentId;
  }

  public setNextContentId(id: number) {
    this.lastContentId = this.contentId;
    this.contentId = id;
  }

  public getLastContentId(): number {
    return this.lastContentId;
  }

  public getContent(): Content {
    return this.getContentById(this.contentId);
  }

  public getContentById(id: number): Content {
    let contentList: Content[] = this.contentListComponent.contentList;
    for(let content of contentList) {
      if (content.getId() == id) {
        return content;
      }
    }
  }

  public nextContent(): void {
    let content: Content = this.getContentById(this.contentId);
    //TODO: Set the Content
  }

  public previousContent(): void {
    this.contentId = this.lastContentId;
    let content: Content = this.getContent();
  }

}
