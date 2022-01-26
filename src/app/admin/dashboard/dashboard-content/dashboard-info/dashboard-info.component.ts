import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Content} from "../../../../content/content";
import {Node} from "../../../../content/tree/node.model";
import {SharedNodeService} from "../shared-node.service";
@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {
  private location: string;
  public node: Node;
  public copyContent: Content;
  public types: string[] = ["Question", "Result", "Explanation", "Video"];
  public showTypeChangeErrorMessage: boolean = false;
  public selected: string;

  constructor(private route: ActivatedRoute,
              public sharedNodeService: SharedNodeService) {
  }

  public ngOnInit(): void {
    this.node = this.sharedNodeService.selectedNode;

    this.location = this.route.snapshot.params['id']
    if (this.route) {
      this.route.params.subscribe(params => {
        this.node = this.sharedNodeService.selectedNode;
        this.copyContent = this.node.content;
        this.selected = this.copyContent.type;
        this.location = params['id'];
      });
    }
  }

  public onUpdate(value: string): void {
    if(this.node.getChildren().length != 0 ) {
      this.showTypeChangeErrorMessage = true;
      return;
    } else {
      this.showTypeChangeErrorMessage = false;
    }

    this.copyContent.value = value;
    for(let i in this.copyContent.answers) {
      this.copyContent.answers[i].value = (<HTMLInputElement>document.getElementById("answer" + i)).value;
    }
    this.copyContent.type = this.selected;
    this.node.content = this.copyContent;
  }

  public onSelected(type: string): void {
    this.selected = type;
  }

}
