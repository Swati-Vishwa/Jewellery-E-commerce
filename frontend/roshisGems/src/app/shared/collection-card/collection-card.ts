import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-collection-card',
  imports: [RouterLink, MatIconModule],
  templateUrl: './collection-card.html',
  styleUrl: './collection-card.css',
})
export class CollectionCard {
  collectionItems = input.required<{
    image: string;
    altText: string;
    title: string;
    detail: string;
    routeLink: string;
  }>()

  yay(){
    alert("clicked")
  }
}
