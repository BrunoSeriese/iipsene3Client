import { Component, OnInit } from '@angular/core';
import {ContentDAO} from "../../content/content.DAO";
import {Content} from "../../content/content.interface";

@Component({
  selector: 'app-vragen',
  templateUrl: './vragen.component.html',
  styleUrls: ['./vragen.component.scss']
})
export class VragenComponent implements OnInit {
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
