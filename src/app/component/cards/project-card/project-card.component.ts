import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  bg = "linear-gradient(135deg, #3d7c98, #a8dff1)"

  projects = [
    {url: "https://owsrt.helixow.dev", name: "Overwatch SR Tracker"},
    {url: "https://www.spigotmc.org/resources/uhc-remake-bungeecord-1-8-1-9-mysql-support-holograms-titles-scoreboards-much-more.18997/", name: "Minecraft UHC Plugin"},
    {url: "https://www.spigotmc.org/resources/alphalibary-1-12.39798/", name: "Minecraft Utility Library Plugin"},
    {url: "https://github.com/HelixOW/BBS-LF-7-DBot", name: "Discord Bot for school"},
  ]

  constructor(private paletteService: PaletteService) {
  }

  ngOnInit() {
    this.paletteService.selectedPalette$.subscribe(palette => {
      this.bg = `radial-gradient(circle, ${palette[0]}, ${palette[1]})`;
    });
  }
}
