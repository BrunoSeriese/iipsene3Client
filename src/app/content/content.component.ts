import { Component, OnInit } from '@angular/core';
import {Content} from "./content.interface";
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentService} from "./content.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public getContent() {
    return this.contentService.getContent();
  }

  public radioChangeHandler(event: any){
    return this.contentService.radioChangeHandler(event)
  }


}
