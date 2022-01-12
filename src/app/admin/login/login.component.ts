import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showErrorMessage: boolean = false;

  constructor(private loginService: LoginService) {
  }

  public ngOnInit(): void {
  }

  public login(email: string, password: string, remember: string): void {
    let observer: Observable<string> = this.loginService.login(email, password);

    observer
      .subscribe(token => {
        if (token != "") {
          this.showErrorMessage = false;
          this.loginService.token = token;
          //this.router.navigate(["/admin/dashboard"]);
        } else {
          this.showErrorMessage = true
        }
      }, error => {
        this.showErrorMessage = true;
      });
  }
}
