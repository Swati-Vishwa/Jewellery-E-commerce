import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeroButton } from '../../shared/hero-button/hero-button';

@Component({
  selector: 'app-hero-banner',
  imports: [HeroButton],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  private router = inject(Router)
  HeroBannerImage = signal('/images/img1.jpeg')
  HeroBannerAlt = signal('Hero section image of a simple statement earring')

  handleHeroBtnClick(){
    this.router.navigate(['/store/signature-collection'])
  }
}
