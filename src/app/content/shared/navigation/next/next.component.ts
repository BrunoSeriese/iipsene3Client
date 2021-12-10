import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";
import {NavigationService} from "../../navigation.service";


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  constructor(private contentService: ContentService,
              private navigationService: NavigationService) { }

  public ngOnInit(): void {
  }

  public onNoAnswerSelected(): boolean {
    return this.navigationService.isSelectedAnswerEmpty();
  }

  public onNextClick(): void {
    if (!this.navigationService.isSelectedAnswerEmpty()){
      this.contentService.setNextContentId(this.navigationService.getSelected());
      this.navigationService.clearSelected();
    }
  }

}
