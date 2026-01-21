import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller, NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TranslateModule, NgStyle],
})
export class FooterComponent {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);
  
  onLogoClick(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.viewportScroller.scrollToPosition([0, 0]);
    } else {
      this.router.navigate(['/']).then(() => {
        this.viewportScroller.scrollToPosition([0, 0],);
      });
    }
  }
}