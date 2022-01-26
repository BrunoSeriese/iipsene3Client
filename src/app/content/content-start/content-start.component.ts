import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";
import {ContentModel} from "../content.model";

@Component({
  selector: 'app-content-start',
  templateUrl: './content-start.component.html',
  styleUrls: ['./content-start.component.scss']
})
export class ContentStartComponent implements OnInit {
  public content: ContentModel;

  constructor(public contentService: ContentService) {
    this.contentService.getContentObservable()
      .subscribe(contents => {
        this.content = this.contentService.createTree(contents).content;
      });
  }

  public ngOnInit(): void {
  }

}
