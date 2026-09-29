import { Component, computed, inject, input } from '@angular/core';
import { AddToCartBtn } from "../add-to-cart-btn/add-to-cart-btn";
import { ViewProductBtn } from "../view-product-btn/view-product-btn";
import { Product } from '../../core/models/product.model';
import { WishlistService } from '../../core/services/wishlist.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, AddToCartBtn, ViewProductBtn],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private router = inject(Router)
  product = input.required<Product>()
  private wishlistService = inject(WishlistService)

  isWishlisted = computed(() => this.wishlistService.isWishlisted(this.product().id))

  onWishlistClick(){
    this.wishlistService.toggle(this.product().id)
  }
  
  onAddToCart() {
    console.log('Added to cart:', this.product().name);
  }
  
  btnViewProduct(){
    this.router.navigate(['/productView', this.product().id])
  }
}
