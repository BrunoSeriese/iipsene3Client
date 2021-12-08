import {Component, DoCheck, OnInit} from '@angular/core';
import {Question} from "./question.model";
import {Content} from "../content.interface";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, DoCheck {
  public question:Question = <Question> this.contentService.getContent();

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    //TODO: Make this better
    this.question = <Question> this.contentService.getContent();
  }

}
