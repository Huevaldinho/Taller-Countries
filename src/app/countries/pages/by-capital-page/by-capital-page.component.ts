import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountriesTableComponent } from "../../components/countries-table/countries-table.component";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountriesTableComponent]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    if (localStorage.getItem('term') && JSON.parse(localStorage.getItem('pathname') || '') === window.location.pathname) {
      this.searchByCapital(JSON.parse(localStorage.getItem('term') || ''));
    }else{
      localStorage.removeItem('term');
      localStorage.removeItem('pathname');
    }
  }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      });
    localStorage.setItem('term', JSON.stringify(term));
    localStorage.setItem('pathname', JSON.stringify(window.location.pathname));
  }

  callSpotify() {
    this.spotifyService.getAccessToken()
      .subscribe(spotifyToken => {
        console.log(spotifyToken);
      });
  }

}
