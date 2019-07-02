import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HomePageService } from "./services/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // | async pipe example
  posts$: Observable<any[]>;
  constructor(private homePageService: HomePageService) {}

  ngOnInit() {
    this.posts$ = this.homePageService.getHomePosts();
  }
}
