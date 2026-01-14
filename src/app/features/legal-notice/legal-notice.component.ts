import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import { FooterComponent } from "../../core/footer/footer.component";



@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
