import { Component, Input } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';

type Skill = {
  name: string;
  iconURL: string;
};

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
})
export class ImageCarouselComponent {
  @Input()
  images: Skill[] = [];
  activeImage: Skill = this.images[0];
  bg = 'linear-gradient(135deg, #3d7c98, #a8dff1)';

  private intervalId: any;

  constructor(private paletteService: PaletteService) {}

  ngOnInit() {
    this.activeImage = this.images[0];

    this.paletteService.selectedPalette$.subscribe((palette) => {
      const colors = palette.colors.map(
        (color) => `${color.color} ${color.percent}%`
      );
      this.bg = `linear-gradient(${palette.angle}, ${colors.join(', ')})`;
    });

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    clearInterval(this.intervalId);

    const currentIndex = this.images.indexOf(this.activeImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.fadeOut(() => {
      this.activeImage = this.images[nextIndex];
      this.fadeIn();
    });

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide(): void {
    clearInterval(this.intervalId);

    const currentIndex = this.images.indexOf(this.activeImage);
    const prevIndex =
      currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.fadeOut(() => {
      this.activeImage = this.images[prevIndex];
      this.fadeIn();
    });

    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private fadeIn(): void {
    const element = document.querySelector('#carousel-logo') as HTMLElement;
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s';

    setTimeout(() => {
      element.style.opacity = '1';
    }, 50);
  }

  private fadeOut(callback: () => void): void {
    const element = document.querySelector('#carousel-logo') as HTMLElement;
    element.style.opacity = '1';
    element.style.transition = 'opacity 0.5s';

    setTimeout(() => {
      element.style.opacity = '0';
      setTimeout(callback, 500);
    }, 50);
  }
}
