import {Component, Input, OnInit} from '@angular/core';
import {Result} from "./result.model";
import {NavigationService} from "../shared/navigation.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() public result: Result;

  constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.navigationService.setSelected(this.result.getAnswer()[0].getNextContentId());
  }

}
