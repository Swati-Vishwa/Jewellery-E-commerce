import { Component, signal } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLogoImg = signal('/images/logo.png');
  navLogoAlt = signal("Roshi's Gems")
}
