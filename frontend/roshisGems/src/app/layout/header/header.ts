import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from "@angular/material/icon";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router)

  private getCurrentHeaderVariant(): string {
    return this.router.routerState.snapshot.root.firstChild?.data['headerVariant'] ?? 'default';
  }

  headerVariant = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.getCurrentHeaderVariant())
    ),
    { initialValue: this.getCurrentHeaderVariant() }
  )

  navLogoImg = signal('/images/logo.png');
  navLogoAlt = signal("Roshi's Gems")
}
