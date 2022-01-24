import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../content/content.model";
import {Node} from "../../../content/tree/node.model";
import {Content} from "../../../content/content.interface";
import {Question} from "../../../content/content-component/question/question.model";
import {Result} from "../../../content/content-component/result/result.model";
import {Explanation} from "../../../content/content-component/explanation/explanation.model";
import {Video} from "../../../content/content-component/video/video.model";
import {SharedNodeService} from "./shared-node.service";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("node") public node: Node;

  constructor(private sharedNodeService: SharedNodeService) { }

  public ngOnInit(): void {
    this.sharedNodeService.updateSelectedNode(this.node);
  }

  public removeNode(): void {
    this.node = null;
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
