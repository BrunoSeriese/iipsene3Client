import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Answer} from "../../../shared/answer/answer.model";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent {
  @Input() public answers: Answer[];
  @Input() public selectedAnswer: number;
  @Output("selectedAnswerEvent") public selectedAnswerEvent: EventEmitter<number> = new EventEmitter<number>();

  public radioButtonChangeHandler(value: number): void {
    this.selectedAnswerEvent.emit(value);
  }

}
