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

  public onSelection(){
    return this.contentService.getSelectedValue() == '';
  }


  public onNextClick(): void {
    if (this.contentService.getSelectedValue() != ''){
      this.contentService.setNextContentId(Number(this.contentService.getSelectedValue()));
      this.contentService.setSelectedValue();
    }

  }

}
