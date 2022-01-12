import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../../content/content.model";

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input("content") public content: ContentModel;
  @Input("contents") public contents: ContentModel[];
  public selectedContent: ContentModel;
  public selectedContentValue: String = "";

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelected(content: ContentModel): void {
    this.selectedContent = content;
    this.selectedContentValue = content.value;
  }

}
