import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  currentLang = this.translateService.currentLang || 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  /** Opens default email client with contact email */
  openEmail(): void {
    window.location.href = 'mailto:davideisenbarth@gmail.com';
  }

  /** Scrolls to top of page */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
}
