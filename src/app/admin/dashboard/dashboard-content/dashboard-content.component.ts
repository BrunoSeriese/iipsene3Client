import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../content/content.model";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("content") public content: ContentModel;
  @Input("contents") public contents: ContentModel[];

  constructor() { }

  public ngOnInit(): void {
  }

}
