import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { FormComponent } from "./contact-form/form/form.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  /** Scrolls to top of page with smooth animation */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
