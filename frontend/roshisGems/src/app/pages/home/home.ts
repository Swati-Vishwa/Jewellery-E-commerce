import { Component } from '@angular/core';
import { HeroBanner } from '../../sections/hero-banner/hero-banner';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../layout/header/header';
import { ServicesSection } from "../../sections/services-section/services-section";
import { CollectionGrid } from "../../sections/collection-grid/collection-grid";
import { FeatureBanner } from "../../sections/feature-banner/feature-banner";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeroBanner, Header, ServicesSection, CollectionGrid, FeatureBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
