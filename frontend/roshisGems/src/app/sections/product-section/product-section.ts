import { Component } from '@angular/core';
import { NewArrivals } from "../new-arrivals/new-arrivals";
import { SignatureCollection } from "../signature-collection/signature-collection";

@Component({
  selector: 'app-product-section',
  imports: [NewArrivals, SignatureCollection],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSection {}
