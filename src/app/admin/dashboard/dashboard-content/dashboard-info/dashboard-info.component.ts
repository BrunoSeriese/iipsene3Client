import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDAO} from "../../../../content/content.DAO";
import {ContentModel} from "../../../../content/content.model";
import {Node} from "../../../../content/tree/node.model";
import {SharedNodeService} from "../shared-node.service";
import {Content} from "../../../../content/content.interface";
import {Question} from "../../../../content/content-component/question/question.model";
import {Result} from "../../../../content/content-component/result/result.model";
import {Explanation} from "../../../../content/content-component/explanation/explanation.model";
import {Video} from "../../../../content/content-component/video/video.model";

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  location: string;
  node: Node;
  copyContent: Content;
  types: string[] = ["Question", "Result", "Explanation", "Video"];
  showTypeChangeErrorMessage: boolean = false;

  constructor(private route: ActivatedRoute,
              public sharedNodeService: SharedNodeService) {
  }

  public ngOnInit(): void {
    this.node = this.sharedNodeService.selectedNode;

    this.location = this.route.snapshot.params['id']
    if (this.route) {
      this.route.params.subscribe(params => {
        this.node = this.sharedNodeService.selectedNode;
        this.copyContent = this.node.content;
        this.location = params['id'];
      });
    }
  }

  public onUpdate(value: string): void {
    if(this.node.getChildren().length == 0 ) {
      this.showTypeChangeErrorMessage = true;
      return;
    } else {
      this.showTypeChangeErrorMessage = false;
    }

    this.copyContent.value = value;
    for(let i in this.copyContent.answers) {
      this.copyContent.answers[i].value = (<HTMLInputElement>document.getElementById("answer" + i)).value;
    }
    this.node.content = this.copyContent;
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

  public onSelected(type: string): void {

  }

}
