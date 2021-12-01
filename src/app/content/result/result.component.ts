import { Component, OnInit } from '@angular/core';
import {Result} from "./result.model";
import {Answer} from "../shared/answer/answer.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result:Result = new Result(3, "je krijgt subsidie B", new Answer(1, "je hebt verloren", 4))

  constructor() { }

  ngOnInit(): void {
  }

}
