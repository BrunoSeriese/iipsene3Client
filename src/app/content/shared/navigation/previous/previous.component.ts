import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../../content.service";
import {Node} from "../../../tree/node.model";


@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  public ngOnInit(): void {
  }

  public OnEmptyArray(): boolean {
    const nodeArray: Node[] = this.contentService.getLastNodeArray();
    return nodeArray == null || nodeArray.length == 0;
  }

  public onPreviousClick(): void {
    this.contentService.setLastNode();
  }
}
