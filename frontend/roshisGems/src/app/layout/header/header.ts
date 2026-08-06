import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLogoImg = signal('/images/logo.png');
  navLogoAlt = signal("Roshi's Gems")
}
