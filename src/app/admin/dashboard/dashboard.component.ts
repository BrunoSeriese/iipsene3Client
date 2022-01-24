import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {ContentModel} from "../../content/content.model";
import {Answer} from "../../content/shared/answer/answer.model";
import {ContentService} from "../../content/content.service";
import {Content} from "../../content/content.interface";
import {Node} from "../../content/tree/node.model";
import {Question} from "../../content/content-component/question/question.model";
import {Result} from "../../content/content-component/result/result.model";
import {Explanation} from "../../content/content-component/explanation/explanation.model";
import {Video} from "../../content/content-component/video/video.model";
import {SharedNodeService} from "./dashboard-content/shared-node.service";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

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
      let contents: Content[] = this.contentDAO.convertArray(contentModels);
      this.nodes = this.contentService.createTree(contents);
      console.log(this.display(this.nodes, []));
    });
  }

  public logger(): void {
    console.log(this.nodes);
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

    // for(let i in this.nodeArray) {
    //   let parentId: number = this.contentService.getParentNodeIdByNode(this.nodeArray[i]);
    //   parentIds.push(parentId);
    // }

    // console.log(this.nodeArray[2])
    let parentId: number = this.contentService.getParentNodeIdByNode(this.nodeArray[2]);
    parentIds.push(parentId);

    // console.log(parentIds);

    // let contentModels: ContentModel[] = this.contentDAO.convertToModels(contents);
    // this.contentDAO.deleteAll();
    // this.contentDAO.addContent(contentModels, parentIds);
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
