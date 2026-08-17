import { Component } from '@angular/core';
import { NewArrivals } from "../new-arrivals/new-arrivals";

@Component({
  selector: 'app-product-section',
  imports: [ NewArrivals],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSection {}
