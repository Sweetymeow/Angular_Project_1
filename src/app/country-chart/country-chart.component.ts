import { Component, Input, ViewChild } from "@angular/core";
import { ChartConfiguration } from "chart.js";
import { CountriesService } from "../countries.service";
import { CountryData } from "../../data/nets-sales-types";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-country-chart",
  templateUrl: "./country-chart.component.html",
  styleUrls: ["./country-chart.component.css"]
})
export class CountryChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() countryData!: CountryData;
  @Input() countryName!: CountryData;

  title = "Net Sales for ";

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<"bar">["data"] = {
    labels: ["2006", "2007", "2008", "2009"],
    datasets: [{ data: [65, 59, 80, 81], label: "Sample" }]
  };

  public barChartOptions: ChartConfiguration<"bar">["options"] = {
    responsive: false
  };

  constructor(public sev: CountriesService) {}

  ngOnChanges(changes) {
    if (changes?.countryData?.currentValue?.yearly_distribution) {
      const { yearly_distribution } = changes?.countryData?.currentValue;
      const res = this.sev.getChartData(yearly_distribution);
      this.barChartData = res;
      this.chart?.update();
    }
  }
}
