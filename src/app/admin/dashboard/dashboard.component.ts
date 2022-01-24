import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {ContentModel} from "../../content/content.model";
import {Answer} from "../../content/shared/answer/answer.model";
import {ContentService} from "../../content/content.service";
import {Content} from "../../content/content.interface";
import {Node} from "../../content/tree/node.model";
import {SharedNodeService} from "./dashboard-content/shared-node.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SharedNodeService]
})
export class DashboardComponent implements OnInit {
  public contents: ContentModel[];
  public node: Node;

  constructor(private contentService: ContentService,
              private contentDAO: ContentDAO) {
    this.getContent();
  }

  public ngOnInit(): void {
  }

  public getContent(): void{
    this.contentDAO.getAll().subscribe(contentModels =>{
      this.contents = contentModels;
      let contents: Content[] = this.contentDAO.convertArray(contentModels);
      this.node = this.contentService.createTree(contents);
    })
  }

  public logger(): void {
    console.log(this.node)
  }






}
