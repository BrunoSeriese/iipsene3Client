import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  onPreviousClick() {

  }
}
