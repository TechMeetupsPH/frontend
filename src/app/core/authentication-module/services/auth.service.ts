import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { UserModel } from "../models/user.model";
import { ResultModel } from "../models/result.model";
import { environment } from "@env/environment";
import { GlobalObservableService } from "@core/shared/globals/global-observable";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private globalObservables: GlobalObservableService,
    private router: Router
  ) {}

  register(user: UserModel): Observable<any> {
    return this.httpClient.post<ResultModel>(`${apiUrl}/register`, user).pipe(
      map(result => {
        if (result.token) {
          // this.setToken(result.token);
          // localStorage.setItem("userName", result.userName);
          // localStorage.setItem("userID", result.userID);
        }
        return result;
      })
    );
  }

  auth(user: UserModel): Observable<any> {
    return this.httpClient.post<ResultModel>(`${apiUrl}/auth`, user).pipe(
      map(result => {
        if (result.token) {
          this.setUserCredentials(result);
        }
        return result;
      })
    );
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userID");
    this.globalObservables.authenticationObservable.next(false);
    this.router.navigate(["entry"]);
  }

  setUserCredentials(result: ResultModel): void {
    localStorage.setItem("access_token", result.token);
    localStorage.setItem("userName", result.userName);
    localStorage.setItem("userID", result.userID);
    this.globalObservables.authenticationObservable.next(true);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }

  public get getUserName(): string {
    return localStorage.getItem("userName");
  }
  public get getUserID(): string {
    return localStorage.getItem("userID");
  }
}

const apiUrl = environment.baseUrl;
