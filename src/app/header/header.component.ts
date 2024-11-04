import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
