import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";
import {NavigationService} from "../../navigation.service";
import {Node} from "../../../tree/node.model";


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
    if (this.onNoAnswerSelected()){
      return;
    }
    const selectedAnswer: number = this.navigationService.getSelected();
    const node: Node = this.contentService.getNodeByAnswerIndex(selectedAnswer);
    this.contentService.setNextNode(node);
    this.navigationService.clearSelected();
  }

}
