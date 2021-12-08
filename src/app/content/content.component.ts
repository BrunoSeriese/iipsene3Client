import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Content} from "./content.interface";
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentService} from "./content.service";
import {Question} from "./question/question.model";
import {Result} from "./result/result.model";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, DoCheck {
  content: Content = this.contentService.getContent();

  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public ngDoCheck() {
    //TODO: Make this better
    this.content = this.contentService.getContent();
  }

  public getContent() {
    return this.contentService.getContent();
  }

  public getInstance(): String {
    if(this.content instanceof Question) {
      return "Question";
    } else if (this.content instanceof Result) {
      return "Result";
    }
  }

}
