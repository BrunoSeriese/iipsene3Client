import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {

  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public onPreviousClick(): void {
    this.contentService.setLastContent();
  }
}
