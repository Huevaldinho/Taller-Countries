import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './countries/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';
import { ByLanguagePageComponent } from './countries/pages/by-language-page/by-language-page.component';

export const routes: Routes = [
    {
        path: '',
        component: ByCapitalPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
            {
                path: 'by-country',
                component: ByCountryPageComponent
            },
            {
                path: 'by-language',
                component: ByLanguagePageComponent
            },
            {
                path: 'by-region',
                component: ByRegionPageComponent
            },
            {
                path: 'by/:id',
                component: CountryPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'countries'
    },

];
