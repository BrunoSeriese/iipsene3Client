import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {ContentModel} from "../../content/content.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contents: ContentModel[] = [];

  constructor(private contentDAO: ContentDAO) {
    this.getContent();
  }

  ngOnInit(): void {
  }

  public getContent(){
    this.contentDAO.getAll().subscribe(contents =>{
      this.contents = contents
    })
  }



}
