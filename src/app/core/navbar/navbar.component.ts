import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);
  private translate = inject(TranslateService);

  currentLang = this.translate.currentLang || 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang = lang;
  }

  onLogoClick(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.viewportScroller.scrollToPosition([0, 0]);
    } else {
      this.router.navigate(['/']).then(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
    }
  }

  scrollToSection(sectionId: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      // Schon auf der Startseite: direkt scrollen
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Nicht auf der Startseite: erst zur Startseite, dann scrollen
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Kurze Verzögerung, damit die Seite geladen ist
      });
    }
  }
}
