import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../../content/content.model";

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input("content") public content: Content;
  @Input("contents") public contents: Content[];
  public selectedContent: Content;
  public selectedContentValue: String = "";

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelected(content: Content): void {
    this.selectedContent = content;
    this.selectedContentValue = content.value;
  }

}
