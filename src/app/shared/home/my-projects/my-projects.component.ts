import { Component } from '@angular/core';
import { SayAboutMeComponent } from "./say-about-me/say-about-me/say-about-me.component";
import { ProjectsComponent } from "./projects/projects/projects.component";

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [SayAboutMeComponent, ProjectsComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
