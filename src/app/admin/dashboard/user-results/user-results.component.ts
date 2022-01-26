import { Component, OnInit } from '@angular/core';
import {UserResult} from "./user-result.model";
import {UserResultsService} from "./user-results.service";

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})
export class UserResultsComponent implements OnInit {
  public userResults: UserResult[];

  constructor(private userResultService: UserResultsService) {}

  public ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.userResultService.getAll()
      .subscribe(userResult => {
        this.userResults = userResult;
      });
  }

  public getAllOfPastWeek(): void {
    this.userResultService.getAllOfPastWeek()
      .subscribe(userResult => {
        this.userResults = userResult;
      });
  }

  public getAllOfPastMonth(): void {
    this.userResultService.getAllOfPastMonth()
      .subscribe(userResult => {
        this.userResults = userResult;
      });
  }

  public getAllOfPastYear(): void {
    this.userResultService.getAllOfPastYear()
      .subscribe(userResult => {
        this.userResults = userResult;
      });
  }
}
