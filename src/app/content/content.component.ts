import {Component, DoCheck, OnInit} from '@angular/core';
import {Content} from "./content.interface";
import {ContentService} from "./content.service";
import {Question} from "./question/question.model";
import {Result} from "./result/result.model";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, DoCheck {
  public content: Content;

  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public ngDoCheck(): void {
    let content: Content = this.contentService.getContent();
    if (this.content != content) {
      this.content = this.contentService.getContent();
    }
  }

  public getInstance(): string {
    if(this.content instanceof Question) {
      return "Question";
    } else if (this.content instanceof Result) {
      return "Result";
    }
  }

}
