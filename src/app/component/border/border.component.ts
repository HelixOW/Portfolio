import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

type Color = {
  color: string;
  index: number;
}

@Component({
  selector: 'svg-border',
  templateUrl: './border.component.html',
})
export class BorderComponent {

  colors: Color[] = [];

  constructor(private paletteService: PaletteService) {
  }
  
  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      this.colors = palette.colors.map((color, index) => ({color: color.color,index: index}));
    })
  }
}
