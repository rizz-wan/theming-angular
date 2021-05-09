import { Injectable } from '@angular/core';

export enum IAvailableThemes {
  light = 'light',
  dark = 'dark',
}

export const lightTheme = {
  'background-secondary': '#8e8e93',
  'background-light': '#e5e5ea',
  'text-primary': '#2c2c2e',
  'link-primary': '#007ae1',
  'display-lightIdicator':'block',
  'display-darkIdicator':'none'
};

export const darkTheme = {
  'background-secondary': '#8e8e93',
  'background-light': '#2c2c2e',
  'text-primary': '#e5e5ea',
  'link-primary': '#0a84e1',
  'display-lightIdicator':'none',
  'display-darkIdicator':'block'
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    this.setLightTheme();
  }

  private activeTheme: IAvailableThemes = IAvailableThemes.light;

  getActiveTheme(): IAvailableThemes {
    return this.activeTheme;
  }

  setLightTheme() {
    this.setTheme(lightTheme);
    this.activeTheme = IAvailableThemes.light;
  }

  setDarkTheme() {
    this.setTheme(darkTheme);
    this.activeTheme = IAvailableThemes.dark;
  }

  private setTheme(theme: { [x: string]: string | null }) {
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
