import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'main-card',
  templateUrl: './main-card.component.html',
})
export class MainCardComponent {
  bg = "linear-gradient(45deg, #3d7c98, #a8dff1)"

  constructor(private paletteService: PaletteService) {
  }

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      const colors = palette.colors.map(color => `${color.color} ${color.percent}%`);
      this.bg = `linear-gradient(${palette.angle}, ${colors.join(', ')})`;
    });
  }
}
