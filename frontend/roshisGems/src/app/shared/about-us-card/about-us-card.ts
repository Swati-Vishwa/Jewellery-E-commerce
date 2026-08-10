import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-us-card',
  imports: [],
  templateUrl: './about-us-card.html',
  styleUrl: './about-us-card.css',
})
export class AboutUsCard {
  aboutUs = input.required<{
    aboutTitle: string;
    aboutDescription: string;
  }>()
}
