import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PaletteService {

  palettes: string[][] = [
    ['#3d7c98', '#a8dff1'],
    ['#f6d365', '#fda085'],
    ['#9d0b51', '#e44ec3'],
    ['#ff0844', '#ffb199'],
    ['#b0e1a2', '#cbf5af'],
    ['#f093fb', '#f5576c'],
    ['#4facfe', '#00f2fe'],
    ['#f6d365', '#fda085'],
    ['#1795a8', '#24afc1'],
    ['#c2528b', '#f380b9'],
    ['#5f50a9', '#9652c2'],
  ]

  private palette$ = new BehaviorSubject<string[]>([]);
  selectedPalette$ = this.palette$.asObservable();

  constructor() {
    const random = Math.floor(Math.random() * this.palettes.length);

    this.palette$.next(this.palettes[random]);
  }
}
