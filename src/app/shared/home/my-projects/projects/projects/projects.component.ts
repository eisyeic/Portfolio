import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeTab = 1;
  contentBorderRadius: string = '30px'

  setTab(tab: number) {
    this.activeTab = tab;
    this.changeBorderRadius(tab);
  }

  changeBorderRadius(tab: number) {
    // Nur bei kleiner Bildschirmbreite (Media Query)
    if (typeof window !== 'undefined' && window.innerWidth <= 1040) {
      if (tab === 1) {
        this.contentBorderRadius = '0 30px 30px 30px';
      } else if (tab === 4) {
        this.contentBorderRadius = '30px 0 30px 30px';
      } else {
        this.contentBorderRadius = '30px';
      }
    } else {
      this.contentBorderRadius = '0px';
    }
  }

  // ... existing code ...

  ngOnInit() {
    this.setTab(this.activeTab ?? 1);
  }
}
