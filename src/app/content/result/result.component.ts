import { Component, OnInit } from '@angular/core';
import {Result} from "./result.model";
import {Answer} from "../shared/answer/answer.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result:Result = new Result(3, "je krijgt subsidie B",
    new Answer(1, "Je kan nu 200 eu krijgen, ofziets, i dunno", 4))

  constructor() { }

  ngOnInit(): void {
  }

}
