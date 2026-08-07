import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  services = input.required<{
    id: number;
    title: string;
    description: string;
  }>()
}
