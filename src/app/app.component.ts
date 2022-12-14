import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../data/nets-sales-types";
import { CountriesService } from "./countries.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Nets Sales";
  countries: Country[];
  selectedCountry: Country;

  constructor(private httpClient: HttpClient, private sev: CountriesService) {}
  ngOnInit() {
    this.httpClient.get("data/nets-sales.json").subscribe((data) => {
      this.countries = data as Country[];
      this.selectedCountry = this.countries[0];
      this.sev.updateCountrySales(this.countries);
    });
  }
  OnCountryChanges(country: Country) {
    this.selectedCountry = country;
  }
}
