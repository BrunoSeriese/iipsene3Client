import {Component, Input} from '@angular/core';
import {ContentModel} from "./content.model";
import {Question} from "./content-component/question/question.model";
import {Result} from "./content-component/result/result.model";
import {Explanation} from "./content-component/explanation/explanation.model";
import {Video} from "./content-component/video/video.model";
import {ContentService} from "./content.service";
import {Content} from "./content.interface";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input("content") public content: Content;

  constructor(private contentService: ContentService) {

  }

  public getInstance(content: Content): string {
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
