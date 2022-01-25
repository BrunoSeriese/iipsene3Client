import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../content/content.model";
import {Node} from "../../../content/tree/node.model";
import {Content} from "../../../content/content.interface";
import {Question} from "../../../content/content-component/question/question.model";
import {Result} from "../../../content/content-component/result/result.model";
import {Explanation} from "../../../content/content-component/explanation/explanation.model";
import {Video} from "../../../content/content-component/video/video.model";
import {SharedNodeService} from "./shared-node.service";
import {ContentService} from "../../../content/content.service";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("nodes") public nodes: Node;
  @Input("node") public node: Node;

  constructor(private sharedNodeService: SharedNodeService,
              public contentService: ContentService) {
  }

  public ngOnInit(): void {
    this.sharedNodeService.updateSelectedNode(this.node);
    console.log("Node level : " + this.contentService.getLevel(this.node))
  }

  public updateNode(){
    this.sharedNodeService.updateSelectedNode(this.node);
  }

  public removeNode(node: Node, value: Node): void {
    if(node == null) {
      return;
    }

    for(let child of node.getChildren()) {
      if(child == value) {
        node.removeChild(child);
        return;
      }
      this.removeNode(child, value);
    }
  }

  public getInstance(content: Content): string {
    if(content instanceof Question) {
      return "Question";
    } else if (content instanceof Result) {
      return "Result";
    } else if (content instanceof Explanation) {
      return "Explanation";
    } else if (content instanceof Video) {
      return "Video";
    }
  }

}
