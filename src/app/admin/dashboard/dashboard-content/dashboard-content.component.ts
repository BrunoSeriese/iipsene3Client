import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../content/content";
import {Node} from "../../../content/tree/node.model";
import {SharedNodeService} from "./shared-node.service";
import {ContentService} from "../../../content/content.service";
import {Answer} from "../../../content/shared/answer/answer.model";

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
    this.sharedNodeService.nodes = this.nodes;
  }

  public updateNode(){
    this.sharedNodeService.updateSelectedNode(this.node);
    this.sharedNodeService.nodes = this.nodes;
  }

  public addNode() {
    let answerIds: number[] = this.sharedNodeService.getAnswerIds(this.nodes, []);
    let answerId: number = this.sharedNodeService.getLowestNonExistingId(answerIds, 0, answerIds.length - 1) + 1;
    this.node.content.answers.push(new Answer(answerId, ""));

    let contentIds: number[] = this.sharedNodeService.getContentIds(this.nodes, []);
    let contentId: number= this.sharedNodeService.getLowestNonExistingId(contentIds, 0, contentIds.length - 1) + 1;
    this.node.addChild(new Node(new Content(contentId, "new Content", "Question", [])));
  }

  public removeNode(): void {
    let parent: Node = this.contentService.getParentNodeByNode(this.node);
    let index: number = parent.getChildren().indexOf(this.node);
    parent.content.answers.splice(index, 1);
    parent.removeChild(this.node);
  }

  public isResult(): boolean {
    return this.node.content.type == "Result";
  }

  public isAllowedToGetChildren(node: Node): boolean {
    return !(node.content.type != "Question" && node.getChildren().length == 1);
  }
}
