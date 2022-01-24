import {Component, OnInit} from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {ContentModel} from "../../content/content.model";
import {Question} from "../../content/content-component/question/question.model";
import {Answer} from "../../content/shared/answer/answer.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contents: ContentModel[] = [];
  public selectedContentType: string = "";
  public uniqueTypeArray: string[] = ['Question', 'Explanation', 'Video', 'Result'];
  private content: ContentModel;
  private answerArray: Answer[] = [];


  constructor(private contentDAO: ContentDAO) {
    this.getContent();
  }

  ngOnInit(): void {
  }


  public getContent() {
    this.contentDAO.getAll().subscribe(contents => {
      this.contents = contents
    })
  }

  public getSelectedType(selectedType: string): void {
    this.selectedContentType = selectedType;

  }

  getValues(question: string, answer1: Answer) {

    this.answerArray = []
    this.answerArray.push(answer1)
    let newID = this.contents[this.contents.length-1].id + 1; //TODO kijken naar ID voor adding en removing
    // console.log(newID);
    this.contents.push(this.content = new ContentModel(newID, question, this.selectedContentType, this.answerArray))
    console.log(this.contents)
  }


}
