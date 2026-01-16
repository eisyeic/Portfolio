import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-say-about-me',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './say-about-me.component.html',
  styleUrl: './say-about-me.component.scss'
})
export class SayAboutMeComponent {

}
