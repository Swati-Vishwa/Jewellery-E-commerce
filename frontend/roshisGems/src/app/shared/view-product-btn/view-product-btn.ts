import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-view-product-btn',
  imports: [],
  templateUrl: './view-product-btn.html',
  styleUrl: './view-product-btn.css',
})
export class ViewProductBtn {
  label = input.required<string>();

  clicked = output<void>()
}
