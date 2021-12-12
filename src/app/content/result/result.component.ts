import {Component, Input} from '@angular/core';
import {Result} from "./result.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() public result: Result;

  constructor() { }

}
