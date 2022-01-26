import { Component, OnInit } from '@angular/core';
import {UserResult} from "./user-result.model";
import {UserResultsService} from "./user-results.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs

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
        this.userResults.forEach(userResult => {
          userResult.dateAdded = userResult.dateAdded.slice(0, userResult.dateAdded.indexOf("."));
        });
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

  public generatePDF(): void {
    let docDefinition = {
      info: {
        title: 'SVDJ Gebruikers Resultaten',
        author: 'Severin, Vincent'
      },
      content: [
        this.createTable(this.userResults, ["Date (yyyy-mm-dd hh:mm:ss)", "Result"])
      ]
    };
    pdfMake.createPdf(docDefinition).download('GebruikerResultaten.pdf').open();
  }

  public createTable(userResults: UserResult[], columns: string[]): any {
    return {
      table: {
        headerRows: 1,
        widths: ['*', '*'],
        body: this.createTableBody(userResults, columns),
      }
    };
  }

  public createTableBody(userResults: UserResult[], columns: string[]): any {
    let body = [];

    body.push(columns);

    userResults.forEach(userResults => {
      let row = [];
      row.push(userResults.dateAdded);
      row.push(userResults.result);

      body.push(row);
    });

    return body;
  }
}
