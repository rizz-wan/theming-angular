import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  IAvailableThemes,
  ThemeService,
} from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  darkTheme = new FormControl(false);

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.themeService.getActiveTheme() === IAvailableThemes.light
      ? this.themeService.setDarkTheme()
      : this.themeService.setLightTheme();
  }

  toggleCredit() {
    const placeholder = document.querySelector('#placeholder');
    const content = document.querySelector('#content');
    placeholder?.toggleAttribute('hidden');
    content?.toggleAttribute('hidden');
  }
}
