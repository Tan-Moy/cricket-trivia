import { Component, OnInit, NgModule, Input } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-chart-container",
  templateUrl: "./chart-container.component.html",
  styleUrls: ["./chart-container.component.scss"]
})
export class ChartContainerComponent implements OnInit {
  @Input() score: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 2,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 10
          }
        }
      ]
    }
  };
  barChartLabels: Label[] = ["Correct", "Incorrect"];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];

  ngOnInit() {
    console.log(this.score.correct);
  }

  ngOnChanges() {
    this.barChartData = [
      { data: [this.score.correct, this.score.incorrect], label: "Score" }
    ];
  }

  constructor() {}
}
