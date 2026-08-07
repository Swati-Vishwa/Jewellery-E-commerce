import { Component } from '@angular/core';
import { CollectionCard } from "../../shared/collection-card/collection-card";

@Component({
  selector: 'app-collection-grid',
  imports: [CollectionCard],
  templateUrl: './collection-grid.html',
  styleUrl: './collection-grid.css',
})
export class CollectionGrid {}
