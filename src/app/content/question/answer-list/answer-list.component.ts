import {Component, DoCheck, OnInit} from '@angular/core';
import {Answer} from "../../shared/answer/answer.model";
import {ContentService} from "../../content.service";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit, DoCheck {
  answerList: Answer[] = this.contentService.getContent().getAnswer();

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    //TODO: Make this better
    this.answerList = this.contentService.getContent().getAnswer();
  }

  public radioChangeHandler(event: any){
    return this.contentService.radioChangeHandler(event)
  }

}
