import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public onNextClick(): void {
    this.contentService.setNextContentId(Number(this.contentService.getSelectedValue()));
  }

}
