import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './content/question/question.component';
import { AnswerListComponent } from './content/question/answer-list/answer-list.component';
import { AnswerComponent } from './content/question/answer-list/answer/answer.component';
import { NextComponent } from './content/shared/navigation/next/next.component';
import { PreviousComponent } from './content/shared/navigation/previous/previous.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerListComponent,
    AnswerComponent,
    NextComponent,
    PreviousComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
