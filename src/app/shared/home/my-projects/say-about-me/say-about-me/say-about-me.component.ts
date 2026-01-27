import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgStyle } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-say-about-me',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  templateUrl: './say-about-me.component.html',
  styleUrl: './say-about-me.component.scss'
})
export class SayAboutMeComponent implements AfterViewInit {
  @ViewChild('bubbleContainer', { static: false }) bubbleContainer!: ElementRef;

  /** Initializes drag/scroll functionality for bubble container */
  ngAfterViewInit(): void {
    this.initializeDragScroll();
  }

  /** 
   * Sets up mouse and touch drag scrolling for the bubble container
   * @private
   */
  private initializeDragScroll(): void {
    const container = this.bubbleContainer.nativeElement as HTMLElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    // Mouse events
    container.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
    });

    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    container.addEventListener('touchstart', (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
      isDown = false;
    });

    container.addEventListener('touchmove', (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  }
}
