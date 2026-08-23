import { computed, inject, Injectable, PLATFORM_ID, signal } from "@angular/core";
import { ProductService } from "./product.service";
import { isPlatformBrowser } from "@angular/common";

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private productService = inject(ProductService)
  private platformId = inject(PLATFORM_ID)
  private isBrower = isPlatformBrowser(this.platformId)
  private whishlistedIDs = signal<Set<number>>(this.loadFromStorage())

  count = computed(() => this.whishlistedIDs().size);

  //toggling items into wishlist
  toggle(productID: number) {
    this.whishlistedIDs.update(current => {
      const update = new Set(current);
      update.has(productID) ? update.delete(productID) : update.add(productID)
      this.saveToStorage(update)
      return update
    })
  }
  
  //returns true if item exists in wishlist
  isWishlisted(productID: number): boolean{
    return this.whishlistedIDs().has(productID)
  }

  //removing products from wishlist
  remove(productID: number){
    this.whishlistedIDs.update(current => {
      const update = new Set(current);
      update.delete(productID)
      this.saveToStorage(update)
      return update
    })
  }

  //takes data out from localStorage
  private loadFromStorage(): Set<number> {
    try {
      const raw = localStorage.getItem('Wishlist')
      return raw ? new Set(JSON.parse(raw)) : new Set()
    } catch (error) {
      console.log(error)
      return new Set()
    }
  }
  //puts data into localStorage
  private saveToStorage(ids: Set<number>){
    if (!this.isBrower) return;
    localStorage.setItem('Wishlist', JSON.stringify([...ids]))
  }
}