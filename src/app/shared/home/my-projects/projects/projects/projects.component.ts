import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  activeTab = 1;
  contentBorderRadius = '30px';

  ngOnInit(): void {
    this.setTab(this.activeTab ?? 1);
  }

  /** 
   * Sets active tab and updates border radius
   * @param tab - Tab number to activate
   */
  setTab(tab: number): void {
    this.activeTab = tab;
    this.changeBorderRadius(tab);
  }

  /**
   * Updates border radius based on active tab and screen size
   * @param tab - Current active tab number
   */
  private changeBorderRadius(tab: number): void {
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
}
