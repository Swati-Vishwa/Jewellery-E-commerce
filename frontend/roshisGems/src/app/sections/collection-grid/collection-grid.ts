import { Component } from '@angular/core';
import { CollectionCard } from "../../shared/collection-card/collection-card";

@Component({
  selector: 'app-collection-grid',
  imports: [CollectionCard],
  templateUrl: './collection-grid.html',
  styleUrl: './collection-grid.css',
})
export class CollectionGrid {
  collectionItem = [
    {
      id: 100,
      image: "/images/img3.jpeg",
      altText: "Stud Earrings",
      title: "Stud Earrings",
      detail: "Delicate details, lasting elegance.",
      routeLink: "/",
    },
    {
      id: 101,
      image: "/images/img4.png",
      altText: "Artisan Jhumkas",
      title: "Artisan Jhumkas",
      detail: " Delicate details, lasting elegance.",
      routeLink: "/",
    },
    {
      id: 102,
      image: "/images/img5.png",
      altText: "Statement Necklaces",
      title: "Statement Necklaces",
      detail: "Delicate details, lasting elegance.",
      routeLink: "/",
    },
    {
      id: 103,
      image: "/images/bracelet.png",
      altText: "Handcrafted Bracelets",
      title: "Handcrafted Bracelets",
      detail: "Delicate details, lasting elegance.",
      routeLink: "/",
    },
  ]
}
