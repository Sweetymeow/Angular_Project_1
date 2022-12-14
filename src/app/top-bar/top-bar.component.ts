import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Country } from "../../data/nets-sales-types";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent {
  selectedCountry: Country;
  selectedIdx: number = 0;
  @Input() countries!: Country[];
  @Output() onCountryClick = new EventEmitter<Country>();

  onClickCountry(country: Country, idx?: number) {
    this.onCountryClick.emit(country);
    this.selectedIdx = idx;
    this.selectedCountry = country || this.countries[0];
  }
}
