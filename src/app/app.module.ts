import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './content/question/question.component';
import { AnswerListComponent } from './content/question/answer-list/answer-list.component';
import { NextComponent } from './content/shared/navigation/next/next.component';
import { PreviousComponent } from './content/shared/navigation/previous/previous.component';
import { ContentComponent } from './content/content.component';
import { ResultComponent } from './content/result/result.component';
import { ExplanationComponent } from './content/explanation/explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerListComponent,
    NextComponent,
    PreviousComponent,
    ContentComponent,
    ResultComponent,
    ExplanationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
