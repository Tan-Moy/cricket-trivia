import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DisplayContainerComponent } from "./components/display-container/display-container.component";

const routes: Routes = [
  { path: "", component: DisplayContainerComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
