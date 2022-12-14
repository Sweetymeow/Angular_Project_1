export interface ArrayData {
  [key: string]: string;
}
interface Dataset {
  data: any[];
  label: string;
}
export interface ChartData {
  labels: string[];
  datasets: Dataset;
}
export interface CountryData {
  net_sales: string;
  yearly_distribution: ArrayData[];
  best_sellers: ArrayData[];
}
export interface Country {
  name: string;
  id?: number;
  country_data: CountryData;
}
