import {Component, Input} from '@angular/core';
import {Content} from "./content.interface";
import {Question} from "./content-component/question/question.model";
import {Result} from "./content-component/result/result.model";
import {Explanation} from "./content-component/explanation/explanation.model";
import {Video} from "./content-component/video/video.model";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() public content: Content;


  constructor() { }

  public getInstance(): string {
    if(this.content instanceof Question) {
      return "Question";
    } else if (this.content instanceof Result) {
      return "Result";
    } else if (this.content instanceof Explanation) {
      return "Explanation";
    } else if (this.content instanceof Video) {
      return "Video";
    }
  }

}
