import { Component } from '@angular/core';
import {ContentService} from "../content.service";
import {Content} from "../content";

@Component({
  selector: 'app-content-start',
  templateUrl: './content-start.component.html',
  styleUrls: ['./content-start.component.scss']
})
export class ContentStartComponent {
  public content: Content;

  constructor(public contentService: ContentService) {
    this.contentService.getContentObservable()
      .subscribe(contents => {
        this.content = this.contentService.createTree(contents).content;
      });
  }
}
