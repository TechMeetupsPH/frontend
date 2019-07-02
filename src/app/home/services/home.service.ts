import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Cacheable } from "ngx-cacheable";
import { environment } from "@env/environment";

@Injectable({
  providedIn: "root"
})
export class HomePageService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(`${apiUrl}/users`);
  }

  @Cacheable()
  getHomePosts(): Observable<any> {
    return this.httpClient.get<any>(`${apiUrl}/home`);
  }
}

const apiUrl = environment.baseUrl;
