import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryChartComponent } from "./country-chart/country-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CountryListComponent,
    CountryChartComponent
  ],
  imports: [BrowserModule, HttpClientModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
