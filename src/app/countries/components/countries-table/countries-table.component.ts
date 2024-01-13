import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './countries-table.component.html',
  styles: ``
})
export class CountriesTableComponent {
  @Input()
  public countries: Country[] = [];
}
