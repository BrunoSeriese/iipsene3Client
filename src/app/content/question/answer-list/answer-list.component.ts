import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from "../../shared/answer/answer.model";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  @Input() public answers: Answer[];
  @Output("selectedAnswerEvent") public selectedAnswerEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public radioButtonChangeHandler(value: number): void {
    this.selectedAnswerEvent.emit(value);
  }

}
