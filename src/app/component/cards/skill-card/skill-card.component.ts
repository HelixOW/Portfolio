import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

type Skill = {
  name: string;
  iconURL: string;
};

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent {
  skills: Skill[] = [
    {
      name: 'Typescript',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg',
    },
    {
      name: 'Go',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    },
    {
      name: 'Java',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    },
    {
      name: 'HTML / CSS',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      name: 'Angular',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    {
      name: 'NodeJS',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'Docker',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    },
    {
      name: 'Postgre',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    },
    {
      name: 'Git',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
      name: 'DevOps',
      iconURL:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg',
    },
  ];

  //skills = ["Typescript", "Go", "Java", "HTML / CSS", "Angular", "Express", "NodeJS", "Docker", "Postgre", "Git", "WSL", "DevOps"]

  bg = 'linear-gradient(135deg, #3d7c98, #a8dff1)';
  constructor(private paletteService: PaletteService) {}

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe((palette) => {
      const colors = palette.colors.map(
        (color) => `${color.color} ${color.percent}%`
      );
      this.bg = `linear-gradient(${palette.angle}, ${colors.join(', ')})`;
    });
  }
}
