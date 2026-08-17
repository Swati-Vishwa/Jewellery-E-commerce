import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-btn',
  imports: [],
  templateUrl: './add-to-cart-btn.html',
  styleUrl: './add-to-cart-btn.css',
})
export class AddToCartBtn {
  label = input.required<string>();

  clicked = output<void>()
}
