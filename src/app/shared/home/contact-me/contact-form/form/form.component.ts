import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  isChecked = false;
  isError = false;
  isHovered = false;
  showPopup = false;

  /** Toggles checkbox state if no error present */
  toggleCheckbox(): void {
    if (!this.isError) {
      this.isChecked = !this.isChecked;
    }
  }

  /**
   * Handles form submission via Formspree API
   * @param event - Form submit event
   * @param form - Angular form reference
   */
  async submitForm(event: Event, form: any): Promise<void> {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showPopup = true;
        form.resetForm();
        this.isChecked = false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }

  /** Closes success popup */
  closePopup(): void {
    this.showPopup = false;
  }
}
