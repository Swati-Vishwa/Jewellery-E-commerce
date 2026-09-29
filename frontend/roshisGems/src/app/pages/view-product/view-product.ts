import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../shared/product-card/product-card';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { WishlistService } from '../../core/services/wishlist.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-view-product',
  imports: [ProductCard, Header, Footer],
  templateUrl: './view-product.html',
  styleUrl: './view-product.css',
})
export class ViewProduct {
  private route = inject(ActivatedRoute)
  private productService = inject(ProductService)
  private wishlistService = inject(WishlistService)

  private allProducts = toSignal(
    this.productService.getAllProducts(), 
    { initialValue: [] as Product[] }
  )

  private productId = computed(() => 
    Number(this.route.snapshot.paramMap.get('productId'))
  )

  product = computed(() => 
    this.allProducts().find(p => p.id === this.productId())
  )

  isWishlisted = computed(() =>
    this.wishlistService.isWishlisted(this.productId())
  );

  onWishlistClick() {
    this.wishlistService.toggle(this.productId());
  }
}
