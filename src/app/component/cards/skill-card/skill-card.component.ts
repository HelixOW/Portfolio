import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent {
  skills = ["Typescript", "Go", "Java", "HTML / CSS", "Angular", "Express", "NodeJS", "Docker", "Postgre", "Git", "WSL", "DevOps"]

  bg = "linear-gradient(135deg, #3d7c98, #a8dff1)"
  constructor(private paletteService: PaletteService) {
  }

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      const colors = palette.colors.map(color => `${color.color} ${color.percent}%`);
      this.bg = `linear-gradient(${palette.angle}, ${colors.join(', ')})`;
    });
  }
}
