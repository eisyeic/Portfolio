import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import { NavbarMobileComponent } from "../../core/navbar-mobile/navbar-mobile.component";
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarComponent, FooterComponent, NavbarMobileComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
}
