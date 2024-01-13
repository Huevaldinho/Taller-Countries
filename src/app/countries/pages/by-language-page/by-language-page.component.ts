import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesTableComponent } from '../../components/countries-table/countries-table.component';

@Component({
  selector: 'app-by-language-page',
  standalone: true,
  imports: [SearchBoxComponent, CountriesTableComponent],
  templateUrl: './by-language-page.component.html',
})
export class ByLanguagePageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    if (localStorage.getItem('term') && JSON.parse(localStorage.getItem('pathname') || '') === window.location.pathname) {
      this.seachLanguage(JSON.parse(localStorage.getItem('term') || ''));
    }else{
      localStorage.removeItem('term');
      localStorage.removeItem('pathname');
    }
  }

  seachLanguage(term: string): void {
    this.countriesService.seachLanguage(term)
      .subscribe(countries => {
        this.countries = countries;
      });
    localStorage.setItem('term', JSON.stringify(term));
    localStorage.setItem('pathname', JSON.stringify(window.location.pathname));
  }
}
