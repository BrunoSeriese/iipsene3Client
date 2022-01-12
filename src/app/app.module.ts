import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './content/content-component/question/question.component';
import { AnswerListComponent } from './content/content-component/question/answer-list/answer-list.component';
import { NextComponent } from './content/shared/navigation/next/next.component';
import { PreviousComponent } from './content/shared/navigation/previous/previous.component';
import { ContentComponent } from './content/content.component';
import { ResultComponent } from './content/content-component/result/result.component';
import { ExplanationComponent } from './content/content-component/explanation/explanation.component';
import { VideoComponent } from './content/content-component/video/video.component';
import { LoginComponent } from './admin/login/login.component';
import { StartComponent } from './start/start.component';

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
    VideoComponent,
    LoginComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
