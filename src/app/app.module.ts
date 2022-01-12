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
import {RouterModule, Routes} from "@angular/router";
import { ContentStartComponent } from './content/content-start/content-start.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'admin', component: LoginComponent},

  {
    path: 'content', component: AppComponent
  },
];
import {HttpClientModule} from "@angular/common/http";
import {DashBoardComponent} from "./admin/dashboard/dash-board.component";

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
    DashBoardComponent,
    ContentStartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
