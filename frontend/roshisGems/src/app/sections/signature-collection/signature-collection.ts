import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from "../../shared/product-card/product-card";

@Component({
  selector: 'app-signature-collection',
  imports: [ProductCard],
  templateUrl: './signature-collection.html',
  styleUrl: './signature-collection.css',
})
export class SignatureCollection {
  private productService = inject(ProductService);

  private allProducts = toSignal(this.productService.getAllProducts(), { initialValue: [] });

  products = computed(() =>
    this.allProducts().filter(p => !p.isNew).slice(0, 6)
  )

  signatureColTitle = signal<string>("Signature Collection")

  signatureCollectionOffer = signal<{ image: string, altText: string }>(
    {
      image: "/images/WearArt.png",
      altText: "Signature collection offer card image"
    }
  )
  signatureCollectionSpecials = signal<{ image: string, altText: string }>(
    {
      image: "/images/img2.jpeg",
      altText: "Signature collection Specials image"
    }
  )
}
