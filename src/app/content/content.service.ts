import { Injectable } from '@angular/core';
import {ContentComponent} from "./content.component";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contentComponent: ContentComponent = new ContentComponent();


  constructor() { }

  getContentList() {

  }

}
