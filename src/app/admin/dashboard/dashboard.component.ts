import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {Content} from "../../content/content";
import {ContentService} from "../../content/content.service";
import {Node} from "../../content/tree/node.model";
import {SharedNodeService} from "./dashboard-content/shared-node.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SharedNodeService]
})
export class DashboardComponent implements OnInit {
  public nodeArray: Node[];
  public nodes: Node;

  constructor(private contentService: ContentService,
              private contentDAO: ContentDAO) {
    this.getContent();

  }

  public ngOnInit(): void {
  }

  public getContent(): void {
    this.contentDAO.getAll().subscribe(contentModels =>{
      this.nodes = this.contentService.createTree(contentModels);
    });
  }

  public updateNodeArray(node: Node): Node[] {
    this.nodeArray = this.display(node, []);
    return this.nodeArray;
  }

  public save(): void {
    this.updateNodeArray(this.nodes);
    let contents: Content[] = [];
    this.nodeArray.forEach(node => {
      contents.push(node.content);
    });

    let parentIds: number[] = [];

    for(let i in this.nodeArray) {
      let parentId: number = this.contentService.getParentNodeIdByNode(this.nodeArray[i]);
      parentIds.push(parentId);
    }
    console.log(this.nodes)
    this.contentDAO.addAllContent(contents, parentIds);
  }

  public display(node: Node, contentArray: Node[]): Node[] {
    if(node == null) {
      return;
    }

    contentArray.push(node);

    for(let child of node.getChildren()) {
      this.display(child, contentArray);
    }
    return contentArray;
  }

}
