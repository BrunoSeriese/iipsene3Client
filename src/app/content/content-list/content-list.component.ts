import { Component, OnInit } from '@angular/core';
import {Question} from "../question/question.model";
import {Answer} from "../shared/answer/answer.model";
import {Content} from "../content.interface";
import {ContentComponent} from "../content.component";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] =[
    new Question(1,"Wil je subsidie voor Mei?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 3),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 2)
    ]),
    new Question(2,"Binnen welke termijn is de subsidie nodig?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 2),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 3)
    ]),
    new Question(3,"Heeft u momenteel een subsidie?", [
      new Answer(1, 'Ja', 2),
      new Answer(2, 'Nee', 2),
      new Answer(3, 'Misschien', 3),
      new Answer(4, 'Af en toe', 3)
    ])
  ]
  constructor() {

  }

  ngOnInit(): void {

  }




}
