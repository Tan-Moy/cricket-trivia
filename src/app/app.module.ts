import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayContainerComponent } from "./components/display-container/display-container.component";
import { QuizContainerComponent } from "./components/quiz-container/quiz-container.component";
import { ChartContainerComponent } from "./components/chart-container/chart-container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule, BsDropdownConfig } from "ngx-bootstrap/dropdown";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    DisplayContainerComponent,
    QuizContainerComponent,
    ChartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
