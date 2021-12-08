import { Component, OnInit } from '@angular/core';
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
export class ContentComponent implements OnInit {
  content: Content = new Question(99, "Test Question", null);
  // content: Content = new Result(99, "Test Result", null);

  constructor(private contentService: ContentService) {
  }

  public ngOnInit(): void {
  }

  public getContent() {
    return this.contentService.getContent();
  }

  public radioChangeHandler(event: any){
    return this.contentService.radioChangeHandler(event)
  }


  public getInstance(): String {
    if(this.content instanceof Question) {
      return "Question";
    } else if (this.content instanceof Result) {
      return "Result";
    }
  }

}
