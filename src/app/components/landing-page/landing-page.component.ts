import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [Menu, ButtonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: '',
                items: [
                    {
                        label: 'Landing Page',
                        icon: 'pi pi-home'
                    },
                    {
                        label: 'Price Change',
                        icon: 'pi pi-chart-line'
                    }
                ]
            }
        ];
    }
}
