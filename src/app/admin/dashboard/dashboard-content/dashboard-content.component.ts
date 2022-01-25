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
  }

  public updateNode(){
    this.sharedNodeService.updateSelectedNode(this.node);
  }

  public removeNode(): void {
    let parent: Node = this.contentService.getParentNodeByNode(this.node);
    console.log(parent.content.value)
    let index: number = parent.getChildren().indexOf(this.node);
    console.log(index);
    parent.content.answers.splice(index, 1);
    parent.removeChild(this.node);
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
