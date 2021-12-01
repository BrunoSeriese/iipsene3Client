import { Component, OnInit } from '@angular/core';
import {Question} from "../question/question.model";
import {Answer} from "../shared/answer/answer.model";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  questionList: Question[] =[
    new Question(1,"Wat is je naam?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 2),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 3)
    ])
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
