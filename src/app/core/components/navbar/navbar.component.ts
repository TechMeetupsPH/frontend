import { Component, OnInit } from "@angular/core";
import { AuthService } from "@core/authentication-module/services/auth.service";
import { GlobalObservableService } from "@core/shared/globals/global-observable";
import { IconsService } from "@core/shared/material-icons/register.icons.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public isAuthenticated: boolean;
  public userName: string = "";
  public isClicked = false;

  constructor(
    private authService: AuthService,
    private globalObservables: GlobalObservableService,
    private IconsService: IconsService
  ) {}

  logOut(): void {
    this.authService.logout();
  }

  // Access token is expired
  simulateExpiredToken() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    localStorage.setItem("access_token", token);
  }

  ngOnInit() {
    this.userName = this.authService.getUserName;
    // initial state according to last state
    this.isAuthenticated = this.authService.loggedIn;
    //subscribe authentication changes
    this.globalObservables.authenticationObservable.subscribe(res => {
      this.isAuthenticated = res;
      this.userName = this.authService.getUserName;
    });
  }
}
