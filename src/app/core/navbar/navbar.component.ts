import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

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

  /** 
   * Switches application language
   * @param lang - Language code to switch to
   */
  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang = lang;
  }

  /** Handles logo click - scrolls to top or navigates to home */
  onLogoClick(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.viewportScroller.scrollToPosition([0, 0]);
    } else {
      this.router.navigate(['/']).then(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
    }
  }

  /**
   * Scrolls to specific section, handles cross-page navigation
   * @param sectionId - ID of target section element
   */
  scrollToSection(sectionId: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToElement(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 500);
      });
    }
  }

  /** 
   * Scrolls to element by ID
   * @param sectionId - Element ID to scroll to
   */
  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
