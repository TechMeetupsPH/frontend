import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HomePageService } from "../../services/home.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;
  constructor(private homePageService: HomePageService) {}

  ngOnInit() {
    this.users$ = this.homePageService.getUsers();
  }
}
