import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../content/content.model";
import {Node} from "../../../content/tree/node.model";
import {SharedNodeService} from "./shared-node.service";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("content") public content: ContentModel;
  @Input("contents") public contents: ContentModel[];
  @Input("node") public node: Node;


  constructor(private sharedNodeService: SharedNodeService) { }


  public ngOnInit(): void {
    this.sharedNodeService.updateSelectedNode(this.node);

  }

}
