import { Component, computed, inject } from '@angular/core';
import { Header } from "../../layout/header/header";
import { ProductService } from '../../core/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from "../../shared/product-card/product-card";
import { ActivatedRoute } from '@angular/router';
import { Footer } from "../../layout/footer/footer";

@Component({
  selector: 'app-store',
  imports: [Header, ProductCard, Footer],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  private route = inject(ActivatedRoute)
  private productService = inject(ProductService)

  private allProducts = toSignal(this.productService.getAllProducts(), { initialValue: [] })

  private type = toSignal(this.route.paramMap, { initialValue: null })

  pageTitle = computed(() => {
    const currentType = this.type()?.get('type')
    return currentType === 'new-arrivals'? 'New Arrivals' : 'Signature Collection'
  })

  products = computed(() => {
    const currentType = this.type()?.get('type')
    const all = this.allProducts();

    return currentType === 'new-arrivals'
      ? this.allProducts().filter(p => p.isNew)
      : this.allProducts().filter(p => !p.isNew)
  })
}
