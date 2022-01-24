import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDAO} from "../../../../content/content.DAO";
import {ContentModel} from "../../../../content/content.model";
import {Node} from "../../../../content/tree/node.model";

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  location: string;
  @Input("node") public node: Node;



  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.location = this.route.snapshot.params['id']
    if (this.route) {
      this.route.params.subscribe(params => {
        console.log(params)
        this.location = params['id'];
        console.log(this.location);

      });
    }
  }


}
