import { Component, OnInit } from "@angular/core";
import { SpinnerManager } from "./shared/spinner-manager";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent implements OnInit {
  public show: boolean = true;

  constructor(
    private spinnerManager: SpinnerManager,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.spinnerManager.spinnerObservable.subscribe(data => {
      this.show = data;
    });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
