import { Country, ArrayData } from "../data/nets-sales-types";
import { Injectable } from "@angular/core";
import { ChartConfiguration } from "chart.js";

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  countrySale: Country[] = [];

  updateCountrySales(countries: Country[]) {
    if (countries && countries.length) {
      this.countrySale = countries;
    }
  }

  getChartData(
    yearly_distribution: ArrayData[]
  ): ChartConfiguration<"bar">["data"] {
    // Label for x axis
    const labels = [];
    // Datasets for y axis
    const data: number[] = [];
    yearly_distribution?.forEach((arr: ArrayData) => {
      const { quarter, sales } = arr;
      labels.push(quarter);
      data.push(parseInt(sales, 0));
    });
    return {
      labels,
      datasets: [
        {
          data,
          label: "yearly distribution(M)"
        }
      ]
    };
  }

  getBestSellers(country?: Country) {
    return (country || this.countrySale[0])?.country_data?.best_sellers;
  }
}
