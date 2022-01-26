import {Component, Input} from '@angular/core';
import {Content} from "./content";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input("content") public content: Content;
}
