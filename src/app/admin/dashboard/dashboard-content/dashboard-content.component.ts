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
  }

  public updateNode(){
    this.sharedNodeService.updateSelectedNode(this.node);
  }

  public addNode() {
    let answerIds: number[] = this.getAnswerIds(this.nodes, []);
    let answerId: number = this.getLowestNonExistingId(answerIds, 0, answerIds.length - 1);
    this.node.content.answers.push(new Answer(answerId, ""));

    let contentIds: number[] = this.getContentIds(this.nodes, []);
    let contentId: number= this.getLowestNonExistingId(contentIds, 0, contentIds.length - 1);
    this.node.addChild(new Node(new Content(contentId, "new Content", "Question", [])));
  }

  public removeNode(): void {
    let parent: Node = this.contentService.getParentNodeByNode(this.node);
    let index: number = parent.getChildren().indexOf(this.node);
    parent.content.answers.splice(index, 1);
    parent.removeChild(this.node);
  }

  public getLowestNonExistingId(list: number[], first: number, last: number) {
    if (first > last) {
      return last + 2;
    }

    if (first != list[first] - 1) {
      return first + 1;
    }

    let mid: number = Math.trunc((first + last) / 2);

    if (list[mid] - 1 == mid) {
      return this.getLowestNonExistingId(list, mid + 1, last);
    }
    return this.getLowestNonExistingId(list, first, mid);
  }

  public getContentIds(node: Node, contentIds: number[]): number[] {
    if(node == null) {
      return;
    }

    contentIds.push(node.content.id);

    for(let child of node.getChildren()) {
      this.getContentIds(child, contentIds);
    }
    return contentIds;
  }

  public getAnswerIds(node: Node, answerIds: number[]): number[] {
    if(node == null) {
      return;
    }

    node.content.answers.forEach(answer => {
      answerIds.push(answer.id);
    })

    for(let child of node.getChildren()) {
      this.getAnswerIds(child, answerIds);
    }
    return answerIds;
  }

  public isResult(): boolean {
    return this.node.content.type == "Result";
  }

}
