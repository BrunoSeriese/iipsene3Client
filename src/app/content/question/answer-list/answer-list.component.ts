import { Component, OnInit } from '@angular/core';
import {Answer} from "../../shared/answer/answer.model";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  answerList: Answer[] = [
    new Answer(1, 'Ja', 2),
    new Answer(2, 'Nee', 2),
    new Answer(3, 'Misschien', 3),
    new Answer(4, 'Af en toe', 3)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
