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
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import { HeaderComponent } from './admin/dashboard/header/header.component';
import { DashboardContentComponent } from './admin/dashboard/dashboard-content/dashboard-content.component';
import { DashboardItemComponent } from './admin/dashboard/dashboard-content/dashboard-item/dashboard-item.component';
import {DashboardInfoComponent} from "./admin/dashboard/dashboard-content/dashboard-info/dashboard-info.component";
import { NavbarComponent } from './content/shared/navigation/navbar/navbar.component';


const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'admin/dashboard', component: DashboardComponent, children: [
      {path: ':id', component: DashboardInfoComponent}
    ]},
  {path: 'content', component: ContentStartComponent},
];

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
    DashboardComponent,
    ContentStartComponent,
    HeaderComponent,
    DashboardContentComponent,
    DashboardItemComponent,
    DashboardInfoComponent,
    NavbarComponent

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
