import { Component, OnInit } from "@angular/core";
import * as data from "../../../assets/data.json";

@Component({
  selector: "app-quiz-container",
  templateUrl: "./quiz-container.component.html",
  styleUrls: ["./quiz-container.component.scss"]
})
export class QuizContainerComponent implements OnInit {
  constructor() {}

  quizData: any = (data as any).default;

  ngOnInit() {
    console.log(this.quizData[0]);
  }
}
