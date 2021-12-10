import {Component, Input, OnInit} from '@angular/core';
import {Question} from "./question.model";
import {NavigationService} from "../shared/navigation.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() public question: Question;

  constructor(public navigationService: NavigationService) { }

  public ngOnInit(): void {
  }

}
