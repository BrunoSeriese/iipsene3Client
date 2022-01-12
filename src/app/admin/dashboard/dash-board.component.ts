import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {Content} from "../../content/content.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
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
