import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
})
export class MainCardComponent {
  bg = "linear-gradient(135deg, #3d7c98, #a8dff1)"

  constructor(private paletteService: PaletteService) {
  }

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      this.bg = `radial-gradient(circle, ${palette[0]}, ${palette[1]})`;
    });
  }
}
