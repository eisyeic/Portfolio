import { Component } from '@angular/core';
import { FormComponent } from "./contact-form/form/form.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
