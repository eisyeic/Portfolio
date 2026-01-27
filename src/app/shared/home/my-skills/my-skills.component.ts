import { Component } from '@angular/core';
import { NgStyle } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
}
