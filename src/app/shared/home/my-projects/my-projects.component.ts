import { Component } from '@angular/core';
import { ProjectsComponent } from "./projects/projects/projects.component";
import { SayAboutMeComponent } from "./say-about-me/say-about-me/say-about-me.component";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjectsComponent, SayAboutMeComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
}
