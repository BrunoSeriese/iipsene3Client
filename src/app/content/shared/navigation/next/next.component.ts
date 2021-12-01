import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";
import {Content} from "../../../content.interface";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  onNextClick() {

  }

}
