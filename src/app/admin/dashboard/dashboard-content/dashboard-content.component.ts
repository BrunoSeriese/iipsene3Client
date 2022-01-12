import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../content/content.model";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("content") public content: Content;
  @Input("contents") public contents: Content[];

  constructor() { }

  public ngOnInit(): void {
  }

}
