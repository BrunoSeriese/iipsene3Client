import { Component } from '@angular/core';
import {ContentService} from "./content/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title; string = 'iipsene3Client';

  constructor(public contentService: ContentService) { }
}
