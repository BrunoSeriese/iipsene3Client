import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {Content} from "../../content/content.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contentArray: Content[] = [];
  constructor(private contentDAO: ContentDAO) {
    this.getContent();
  }

  ngOnInit(): void {
  }

  public getContent(){
    this.contentDAO.findAll().subscribe(contents =>{
      this.contentArray = contents
    })
  }



}
