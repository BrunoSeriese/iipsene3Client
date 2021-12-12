import {Component, Input, OnInit} from '@angular/core';
import {Explanation} from "./explanation.model";
import {NavigationService} from "../shared/navigation.service";

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent implements OnInit {
  @Input() public explanation: Explanation;

  constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.navigationService.setSelected(0);
  }

}
