import {Component, Input} from '@angular/core';
import {NavigationService} from "../../shared/navigation.service";
import {Content} from "../../content";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() public question: Content;

  constructor(public navigationService: NavigationService) {

  }

}
