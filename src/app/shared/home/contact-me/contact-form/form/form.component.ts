import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [TranslateModule, CommonModule],
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
}
