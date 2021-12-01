import { Component, OnInit } from '@angular/core';
import {Content} from "./content.interface";
import {ContentListComponent} from "./content-list/content-list.component";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private _contentId: number;
  private lastContentId: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public getContentId(): number {
    return this._contentId;
  }

  public setNextContentId(id: number) {
    this.lastContentId = this._contentId;
    this._contentId = id;
  }

  public getLastContentId(): number {
    return this.lastContentId;
  }

  public getContent(): Content {
    return this.getContentById(this._contentId);
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
    let content: Content = this.getContentById(this._contentId);
    //TODO: Set the Content
  }

  public previousContent(): void {
    this._contentId = this.lastContentId;
    let content: Content = this.getContent();
  }

  public getCurrentContentId(): number{

    return this._contentId;
  }

  set contentId(value: number) {
    this._contentId = value;
    console.log('content component ' + this._contentId)
  }



}
