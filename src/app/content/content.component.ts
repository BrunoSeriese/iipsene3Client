import { Component, OnInit } from '@angular/core';
import {Content} from "./content.interface";
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentService} from "./content.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private _contentListComponent: ContentListComponent = new ContentListComponent();
  public contentId: number = 0;
  private lastContentId: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  get contentListComponent(): ContentListComponent {
    return this._contentListComponent;
  }

  public getContentId(): number {
    console.log(this.contentId)
    return this.contentId;

  }

  public setNextContentId(id: number) {
    this.lastContentId = this.contentId;
    console.log('ervoor' + this.contentId)
    this.contentId = id;
    console.log('erna' + this.contentId)
  }

  public getLastContentId(): number {
    return this.lastContentId;
  }

  public getContent(): Content {
    return this.getContentById(this.contentId);
  }

  public getContentById(id: number): Content {
    let contentList: Content[] = new ContentListComponent().contentList;
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
