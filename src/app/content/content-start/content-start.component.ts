import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-content-start',
  templateUrl: './content-start.component.html',
  styleUrls: ['./content-start.component.scss']
})
export class ContentStartComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
  }

}
