import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PriceChangeComponent } from './components/price-change/price-change.component';
import { DataFetchHistoryComponent } from './components/data-fetch-history/data-fetch-history.component';

export const routes: Routes = [
    {
        path: 'landing-page',
        component: LandingPageComponent
    },
    {
        path: 'price-change',
        component: PriceChangeComponent
    },
    {
        path: 'data-fetch-history',
        component: DataFetchHistoryComponent
    }
];
