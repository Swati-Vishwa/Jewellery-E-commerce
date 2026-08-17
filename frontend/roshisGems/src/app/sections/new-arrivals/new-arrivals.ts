import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from "../../shared/product-card/product-card";
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-new-arrivals',
  imports: [ProductCard],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.css',
})
export class NewArrivals {
  private productService = inject(ProductService);

  private allProducts = toSignal(this.productService.getAllProducts(), {initialValue: []});

  products = computed(() => 
    this.allProducts().filter(p => p.isNew).slice(0, 3)
  )
}
