import { Component, Input } from "@angular/core";
import { CountryData } from "../../data/nets-sales-types";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"]
})
export class CountryListComponent {
  @Input() countryData!: CountryData;
}
