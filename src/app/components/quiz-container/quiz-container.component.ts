import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import * as data from "../../../assets/data.json";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: "app-quiz-container",
  templateUrl: "./quiz-container.component.html",
  styleUrls: ["./quiz-container.component.scss"]
})
export class QuizContainerComponent implements OnInit {
  @Output() accuracyCounts = new EventEmitter();

  constructor() {}

  quizData: any = (data as any).default;
  modifiedData: any;
  defaultSelectValue: string = "Choose Answer";
  isMissing: boolean;
  isSubmitted: boolean;

  ngOnInit() {
    console.log(this.quizData[0]);

    //modify the quiz data
    this.modifyData();
  }

  modifyData() {
    this.modifiedData = this.quizData.map(item => {
      item["selectedAnswer"] = this.defaultSelectValue;
      if (item.options[0] !== this.defaultSelectValue) {
        item.options.unshift(this.defaultSelectValue);
      }
      return item;
    });
  }

  submitBtnHandler(form) {
    console.log(form);
    console.log(this.modifiedData);
    this.checkIfMissing();

    //if no answer missing, highlight incorrect answer
    if (!this.isMissing) {
      this.isSubmitted = true;
      console.log(this.isMissing);
      this.accuracyCount();
    }
  }

  checkIfMissing() {
    // should highlight missing
    this.isMissing = this.modifiedData.some(
      i => i.selectedAnswer == this.defaultSelectValue
    );
    console.log("MISSING", this.isMissing);
  }

  accuracyCount() {
    let count = 0;

    this.modifiedData.forEach(element => {
      if (element.selectedAnswer == element.correctAnswer) {
        count++;
      }
    });

    // output the counts via eventenniter
    console.log(count);
    this.accuracyCounts.emit({
      correct: count,
      incorrect: this.quizData.length - count
    });
  }

  resetBtnHandler() {
    this.modifiedData = null;
    this.modifyData();
    this.isSubmitted = false;
    this.isMissing = false;
  }
}
