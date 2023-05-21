import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type PaletteColor = {
  color: string;
  percent: number;
}

type PaletteColors = {
  colors: PaletteColor[];
  angle: string;
}

@Injectable()
export class PaletteService {

  palettes: PaletteColors[] = [
    {
      colors: [
        { color: '#4158D0', percent: 0 },
        { color: '#C850C0', percent: 46 },
        { color: '#FFCC70', percent: 100 }
      ],
      angle: '45deg'
    },
    {
      colors: [
        { color: '#0093E9', percent: 0 },
        { color: '#80D0C7', percent: 100 }
      ],
      angle: '160deg'
    },
    {
      colors: [
        { color: '#8EC5FC', percent: 0 },
        { color: '#E0C3FC', percent: 100 }
      ],
      angle: '62deg'
    },
    {
      colors: [
        { color: '#D9AFD9', percent: 0 },
        { color: '#97D9E1', percent: 100 }
      ],
      angle: '0deg'
    },
    {
      colors: [
        { color: '#FBAB7E', percent: 0 },
        { color: '#F7CE68', percent: 100 }
      ],
      angle: '62deg'
    },
    {
      colors: [
        { color: '#85FFBD', percent: 0 },
        { color: '#FFFB7D', percent: 100 }
      ],
      angle: '45deg'
    },
    {
      colors: [
        { color: '#8BC6EC', percent: 0 },
        { color: '#9599E2', percent: 100 }
      ],
      angle: '135deg'
    },
    {
      colors: [
        { color: '#FFDEE9', percent: 0 },
        { color: '#B5FFFC', percent: 100 }
      ],
      angle: '0deg'
    },
    {
      colors: [
        { color: '#08AEEA', percent: 0 },
        { color: '#2AF598', percent: 100 }
      ],
      angle: '0deg'
    },
    {
      colors: [
        { color: '#FFE53B', percent: 0 },
        { color: '#FF2525', percent: 100 }
      ],
      angle: '147deg'
    },
    {
      colors: [
        { color: '#21D4FD', percent: 0 },
        { color: '#B721FF', percent: 100 }
      ],
      angle: '19deg'
    },
    {
      colors: [
        { color: '#3EECAC', percent: 0 },
        { color: '#EE74E1', percent: 100 }
      ],
      angle: '19deg'
    },
    {
      colors: [
        { color: '#FF9A8B', percent: 0 },
        { color: '#FF6A88', percent: 55 },
        { color: '#FF99AC', percent: 100 }
      ],
      angle: '90deg'
    },
    {
      colors: [
        { color: '#FBDA61', percent: 0 },
        { color: '#FF5ACD', percent: 100 }
      ],
      angle: '45deg'
    },
    {
      colors: [
        { color: '#FAACA8', percent: 0 },
        { color: '#DDD6F3', percent: 100 }
      ],
      angle: '19deg'
    },
  ]

  private palette$ = new BehaviorSubject<PaletteColors>({ colors: [], angle: '' });
  selectedPalette$ = this.palette$.asObservable();

  constructor() {
    const random = Math.floor(Math.random() * this.palettes.length);

    this.palette$.next(this.palettes[random]);
  }
}
