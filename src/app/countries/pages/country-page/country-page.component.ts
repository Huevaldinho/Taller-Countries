import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {

  public country?: Country;
  //public country?: Country | null = null;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        else return this.country = country;
      });
  }
  handleClick(): void {
    if (localStorage.getItem('pathname')) {
      console.log("Local storage:", JSON.parse(localStorage.getItem('pathname') || ''));
      this.router.navigateByUrl(JSON.parse(localStorage.getItem('pathname') || ''));
    }
  }



}
