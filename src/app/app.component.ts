import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from "./core/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from "./core/header/header.component"; 

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

  ngOnInit() {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
