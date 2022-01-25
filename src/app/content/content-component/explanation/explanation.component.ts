import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from "../../shared/navigation.service";
import {ContentModel} from "../../content.model";

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent implements OnInit {
  @Input() public explanation: ContentModel;

  constructor(private navigationService: NavigationService) { }

  public ngOnInit(): void {
    this.navigationService.setSelected(0);
  }

}
