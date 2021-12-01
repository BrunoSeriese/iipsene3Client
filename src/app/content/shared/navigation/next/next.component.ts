import { Component, OnInit } from '@angular/core';
import {ContentComponent} from "../../../content.component";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNextClick() {
    let content = new ContentComponent()
    content.contentId = 3;
    console.log('next content ' + new ContentComponent().getCurrentContentId())
  }

}
