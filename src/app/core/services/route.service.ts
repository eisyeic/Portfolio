import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  currentRoute$: Observable<string>;

  constructor(private router: Router) {
    this.currentRoute$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects)
    );
  }

  /** 
   * Checks if header should be hidden for current URL
   * @param url - Current route URL
   */
  shouldHideHeader(url: string): boolean {
    return url.includes('/legal-notice');
  }
}
