import { RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import { Home } from './home/home'

@Component({
  selector: 'app-root',
  imports: [Home, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homie';
}
