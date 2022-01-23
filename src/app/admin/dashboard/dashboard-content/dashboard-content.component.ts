import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from "../../../content/content.model";
import {Content} from "../../../content/content.interface";
import {Answer} from "../../../content/shared/answer/answer.model";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input("content") public content: ContentModel;
  @Input("contents") public contents: ContentModel[];

  constructor() { }

  public ngOnInit(): void {
  }

  public deleteContent(){
    let index = this.contents.findIndex(x => x.id === this.content.id);
    this.contents.splice(index, 1)
  }

  public deleteAnswer(answer: Answer){
    let index = this.content.answers.findIndex(x => x.id === answer.id);
    this.content.answers.splice(index, 1);
  }

}
