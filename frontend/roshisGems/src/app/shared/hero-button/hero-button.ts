import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  imports: [],
  templateUrl: './hero-button.html',
  styleUrl: './hero-button.css',
})
export class HeroButton {
  heroBtnText = signal('View collection')

  btnClick = output<void>()

  onHeroBtnClick(){
    this.btnClick.emit()
  }
}
