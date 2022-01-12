import {Component, Input} from '@angular/core';
import {Question} from "./question.model";
import {NavigationService} from "../../shared/navigation.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() public question: Question;

  constructor(public navigationService: NavigationService) {

  }

}
