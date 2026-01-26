import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NgStyle } from "@angular/common";
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-say-about-me',
  standalone: true,
  imports: [TranslateModule, NgStyle],
  templateUrl: './say-about-me.component.html',
  styleUrl: './say-about-me.component.scss'
})

export class SayAboutMeComponent implements AfterViewInit {
    // ... existing code ...
    @ViewChild('bubbleContainer', { static: false }) bubbleContainer!: ElementRef;

    ngAfterViewInit() {
        const container = this.bubbleContainer.nativeElement as HTMLElement;
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        // Maus-Events
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
            const walk = (x - startX) * 2; // Geschwindigkeit
            container.scrollLeft = scrollLeft - walk;
        });

        // Touch-Events
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
    // ... existing code ...
}