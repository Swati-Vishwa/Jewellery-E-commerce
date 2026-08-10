import { Component, signal } from '@angular/core';
import { FeatureImgCard } from "../../shared/feature-img-card/feature-img-card";
import { AboutUsCard } from "../../shared/about-us-card/about-us-card";

@Component({
  selector: 'app-feature-banner',
  imports: [FeatureImgCard, AboutUsCard],
  templateUrl: './feature-banner.html',
  styleUrl: './feature-banner.css',
})
export class FeatureBanner {
  
  featureBannerImageData = [
    {
      srcImg: '/images/bracelet.png',
      altText: "Hydrangea bracelet",
      bgColor: '#92afbf',
    }
  ];  
    featureBannerAboutData = [
    {
        aboutTitle: "Modern & Sophisticated",
        aboutDescription: "Our passion lies in creating meaningful jewelry that feels as unique as the people who wear it. Every design is handcrafted with care, using carefully selected materials and refined craftsmanship to bring beauty, quality, and authenticity to every piece.",
    }
  ]
}
