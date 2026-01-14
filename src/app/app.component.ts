import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, NavigationEnd, Router, Event } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { FooterComponent } from "./core/footer/footer.component";
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  showHeader = true;

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.setDefaultLang('de');
    this.translate.use('de');

    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const hiddenRoutes = ['/legal-notice', '/privacy-policy'];
      this.showHeader = !hiddenRoutes.some(route => event.url.includes(route));
    });
  }
}
