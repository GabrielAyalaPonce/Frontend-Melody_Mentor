import { CommonModule } from '@angular/common';
import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  @Input() level!: { name: string; lessons: string[] };
  @Output() dropdownStateChange = new EventEmitter<boolean>(); // Nuevo Output

  
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.dropdownStateChange.emit(this.isDropdownOpen); // Emite el nuevo estado

  }
}
