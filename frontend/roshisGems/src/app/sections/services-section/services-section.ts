import { Component } from '@angular/core';
import { ServiceCard } from '../../shared/service-card/service-card';

@Component({
  selector: 'app-services-section',
  imports: [ServiceCard],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  serviceCardData =[
    {
      id: 1,
      title: "Custom Jewellery",
      description: "Transform your vision into a handcrafted masterpiece, where every detail is carefully considered—from the first sketch to the final polished creation."
    },
    {
      id: 2,
      title: "Gift Wrapping",
      description: "Every order is thoughtfully wrapped in elegant, premium packaging, making it ready to gift for any special occasion—no extra preparation needed."
    },
    {
      id: 3,
      title: "Personalized Engraving",
      description: "Transform your vision into a handcrafted masterpiece, where every detail is carefully considered—from the first sketch to the final polished creation."
    },
  ];
}
