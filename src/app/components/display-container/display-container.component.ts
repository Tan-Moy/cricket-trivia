import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-container",
  templateUrl: "./display-container.component.html",
  styleUrls: ["./display-container.component.scss"]
})
export class DisplayContainerComponent implements OnInit {
  score: any;

  constructor() {}

  ngOnInit() {}

  getCounts(counts) {
    this.score = counts;
    console.log(counts);
  }
}
