import {Component, Input} from '@angular/core';
import {NavigationService} from "../../shared/navigation.service";
import {ContentModel} from "../../content.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() public question: ContentModel;

  constructor(public navigationService: NavigationService) {

  }

}
