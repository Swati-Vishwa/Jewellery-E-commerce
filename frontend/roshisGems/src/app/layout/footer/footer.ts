import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  quickLinks = signal([
    { name: 'Home', routerLink: '/' },
    { name: 'Shop', routerLink: '/' },
    { name: 'Collection', routerLink: '/' },
    { name: 'About Us', routerLink: '/' },
    { name: 'Wishlist', routerLink: '/' }
  ])

  customerCare = signal([
    { name: 'Contact Us', routerLink: '/' },
    { name: 'Shipping & Returns', routerLink: '/' },
    { name: 'FAQ', routerLink: '/' },
    { name: 'Privacy', routerLink: '/' },
    { name: 'Terms & Conditions', routerLink: '/' },
  ])

  Address = signal("123, address, uttar pradesh, India" )
  businessEmail = signal('hello@roshisgems.com')
  contactNumber = signal('+91 12345 67890')
}
