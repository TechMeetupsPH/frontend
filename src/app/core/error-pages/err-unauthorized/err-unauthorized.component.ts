import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-err-unauthorized",
  templateUrl: "./err-unauthorized.component.html",
  styleUrls: ["./err-unauthorized.component.scss"]
})
export class ErrUnauthorizedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
