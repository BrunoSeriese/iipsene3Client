import {Component, Input} from '@angular/core';
import {ContentModel} from "./content.model";
import {ContentService} from "./content.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input("content") public content: ContentModel;

  constructor() {
  }

}
