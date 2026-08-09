import { Component, signal } from '@angular/core';
import { FeatureImgCard } from "../../shared/feature-img-card/feature-img-card";

@Component({
  selector: 'app-feature-banner',
  imports: [FeatureImgCard],
  templateUrl: './feature-banner.html',
  styleUrl: './feature-banner.css',
})
export class FeatureBanner {
  
  featureBannerData = [
    {
      srcImg: '/images/bracelet.png',
      altText: "Hydrangea bracelet",
      bgColor: '#92afbf',
    }
  ]
}
