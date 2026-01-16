import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  isChecked = false;
  isError = false;
  isHovered = false;

  toggleCheckbox() {
    if (!this.isError) {
      this.isChecked = !this.isChecked;
    }
  }

  showPopup = false;

  async submitForm(event: Event, form: any) {
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
      console.error('Formspree error', error);
    }
  }

  closePopup() {
    this.showPopup = false;
  }

}
