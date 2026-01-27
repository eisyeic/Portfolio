import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  currentLang = this.translateService.currentLang || 'en';
  menuOpen = false;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  /** Toggles mobile menu open/closed state */
  onMenuIconClick(): void {
    this.menuOpen = !this.menuOpen;
  }

  /** Closes the mobile menu */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /** 
   * Switches application language 
   * @param lang - Language code (e.g., 'en', 'de')
   */
  switchLanguage(lang: string): void {
    this.translateService.use(lang);
    this.currentLang = lang;
  }

  /** Opens default email client with contact email */
  openEmail(): void {
    window.location.href = 'mailto:davideisenbarth@gmail.com';
  }

  /** Scrolls to top of page and closes menu */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMenu();
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
    this.closeMenu();
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
