import { Component, input } from '@angular/core';
import { AddToCartBtn } from "../add-to-cart-btn/add-to-cart-btn";
import { ViewProductBtn } from "../view-product-btn/view-product-btn";
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [AddToCartBtn, ViewProductBtn],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>()
  btnClicked(){
    alert("clicked")
  }
}
