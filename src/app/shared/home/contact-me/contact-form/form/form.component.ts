import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  isChecked = false;
  isError = false;
  isHovered = false;
  showPopup = false;

  name = '';
  email = '';
  message = '';

  nameError = false;
  emailError = false;
  messageError = false;
  nameTouched = false;
  emailTouched = false;
  messageTouched = false;

  /** Toggles checkbox state if no error present */
  toggleCheckbox(): void {
    if (!this.isError) {
      this.isChecked = !this.isChecked;
      if (this.isChecked) {
        this.validateAllFields();
      }
    }
  }

  /** Validates all fields and shows errors */
  validateAllFields(): void {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
  }

  /** Validates name field */
  validateName(): void {
    if (this.nameTouched) {
      const cleanName = this.name.trim().replace(/\s+/g, ' ');
      const isValidName = /^[a-zA-ZäöüÄÖÜß\s'\-]+$/.test(cleanName);
      this.nameError = cleanName === '' || !isValidName;
    }
  }

  /** Validates email field */
  validateEmail(): void {
    if (this.emailTouched) {
      this.emailError = this.email.trim() === '' || !this.isValidEmail(this.email);
    }
  }

  /** Validates message field */
  validateMessage(): void {
    if (this.messageTouched) {
      this.messageError = this.message.trim() === '';
    }
  }

  /** Handles input changes for real-time validation */
  onInputChange(field: string, event?: Event): void {
    switch (field) {
      case 'name':
        if (event?.type === 'keydown') {
          const keyEvent = event as KeyboardEvent;
          const key = keyEvent.key;
          const isValidKey = /^[a-zA-ZäöüÄÖÜß'\-\s]$/.test(key) || 
                            ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(key);
          if (!isValidKey && key.length === 1) {
            keyEvent.preventDefault();
            return;
          }
        }
        const input = event?.target as HTMLInputElement;
        if (input) {
          const cursorPosition = input.selectionStart || 0;
          const filteredName = this.name.replace(/[^a-zA-ZäöüÄÖÜß\s'\-]/g, '').replace(/\s{2,}/g, ' ');
          if (this.name !== filteredName) {
            this.name = filteredName;
            setTimeout(() => input.setSelectionRange(cursorPosition, cursorPosition), 0);
          }
        }
        if (this.nameTouched) this.validateName();
        break;
      case 'email':
        if (this.emailTouched) this.validateEmail();
        break;
      case 'message':
        if (this.messageTouched) this.validateMessage();
        break;
    }
  }

  /** Handles field blur events */
  onFieldBlur(field: string): void {
    switch (field) {
      case 'name':
        this.name = this.name.replace(/[^a-zA-ZäöüÄÖÜß\s'\-]/g, '').replace(/\s{2,}/g, ' ').trim();
        this.nameTouched = true;
        this.validateName();
        break;
      case 'email':
        this.emailTouched = true;
        this.validateEmail();
        break;
      case 'message':
        this.messageTouched = true;
        this.validateMessage();
        break;
    }
  }

  /** Validates email format */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  /** Checks if form is valid */
  isFormValid(): boolean {
    const cleanName = this.name.trim().replace(/\s+/g, ' ');
    const isValidName = /^[a-zA-ZäöüÄÖÜß\s'\-]+$/.test(cleanName);
    return cleanName !== '' && 
           isValidName &&
           this.email.trim() !== '' && 
           this.isValidEmail(this.email) &&
           this.message.trim() !== '' && 
           this.isChecked;
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
        this.name = '';
        this.email = '';
        this.message = '';
        this.nameError = false;
        this.emailError = false;
        this.messageError = false;
        this.nameTouched = false;
        this.emailTouched = false;
        this.messageTouched = false;
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
