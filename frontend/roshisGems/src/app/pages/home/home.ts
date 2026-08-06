import { Component } from '@angular/core';
import { HeroBanner } from '../../sections/hero-banner/hero-banner';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeroBanner, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
