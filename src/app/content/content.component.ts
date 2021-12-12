import {Component, DoCheck} from '@angular/core';
import {Content} from "./content.interface";
import {ContentService} from "./content.service";
import {Question} from "./question/question.model";
import {Result} from "./result/result.model";
import {Explanation} from "./explanation/explanation.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements DoCheck {
  public content: Content;

  constructor(private contentService: ContentService) { }

  public ngDoCheck(): void {
    let content: Content = this.contentService.getContent();
    if (this.content != content) {
      this.content = content;
    }
  }

  public getInstance(): string {
    if(this.content instanceof Question) {
      return "Question";
    } else if (this.content instanceof Result) {
      return "Result";
    } else if (this.content instanceof Explanation) {
      return "Explanation";
    }
  }

}
