import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-img-card',
  imports: [],
  templateUrl: './feature-img-card.html',
  styleUrl: './feature-img-card.css',
})
export class FeatureImgCard {
  FeatureImage = input.required<{
    srcImg: string;
    altText: string;
    bgColor: string;
  }>()
}
