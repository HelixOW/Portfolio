import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'svg-border',
  templateUrl: './border.component.html',
})
export class BorderComponent {

  color1 = 'rgb(125, 104, 204)'; 
  color2 = 'rgb(54, 122, 116)';

  constructor(private paletteService: PaletteService) {
  }

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      this.color1 = palette[0];
      this.color2 = palette[1];
    });
  }
}
