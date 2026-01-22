import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-say-about-me',
  standalone: true,
  imports: [TranslateModule, NgStyle],
  templateUrl: './say-about-me.component.html',
  styleUrl: './say-about-me.component.scss'
})
export class SayAboutMeComponent {

}
