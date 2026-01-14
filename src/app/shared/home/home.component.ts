import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { NavbarComponent } from "../../core/navbar/navbar.component";
import { FooterComponent } from "../../core/footer/footer.component";
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WhyMeComponent, NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
