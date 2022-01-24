import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDAO} from "../../../../content/content.DAO";
import {ContentModel} from "../../../../content/content.model";
import {Node} from "../../../../content/tree/node.model";
import {SharedNodeService} from "../shared-node.service";

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  location: string;
  node: Node;



  constructor(private route: ActivatedRoute, public sharedNodeService: SharedNodeService) {
    this.node = this.sharedNodeService.selectedNode;
  }


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
