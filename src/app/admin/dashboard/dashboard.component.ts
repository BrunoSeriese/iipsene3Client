import {Component, OnInit} from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {ContentModel} from "../../content/content.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contents: ContentModel[] = [];
  public selectedContent: ContentModel;
  public selectedContentType: String = "";
  public newArray: any[] = [];


  constructor(private contentDAO: ContentDAO) {
    this.getContent();
  }

  ngOnInit(): void {
  }

  public getContent() {
    this.contentDAO.getAll().subscribe(contents => {
      this.contents = contents
    })
  }


  public getUniqueTypes() {
    for (const a of this.contents) {
      if (!this.newArray.includes(a.type)) {
        this.newArray.push(a.type)
      }
    }
  }


  public onSelected(content: ContentModel): void {
    this.selectedContent = content;
    this.selectedContentType = content.type;
  }

  test() {

  }
}
