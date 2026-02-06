import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  /** Initializes application with default language settings */
  ngOnInit(): void {
    AOS.init();
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('selectedLanguage') || 'de';
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    } else {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
    }
  }
}