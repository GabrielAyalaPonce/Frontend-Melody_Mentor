import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level/level.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule, LevelComponent],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent {
  isDropdownOpen: boolean[] = [];

  ngOnInit() {
    this.levels.forEach(() => this.isDropdownOpen.push(false));
  }

  toggleDropdown(index: number,isOpen:boolean) {
    this.isDropdownOpen[index] = isOpen;

  }
  

  levels = [
    {
      name: 'Nivel 1: Fundamentos de la musica',
      lessons: [
        'Introducción a la Música',
        'Lectura de Notas Musicales',
        'Ritmo y Compás',
        'Notas en el Piano',
      ],
    },
    {
      name: 'Nivel 2: Teoría Musical Básica ',
      lessons: ['Escalas Musicales', 'Intervalos', 'Acordes Básicos','Grados musicales'],
    },
    { name: 'Nivel 3: Aplicación Práctica', lessons: ['Ejercicios de Independencia de Manos', 'Lesson 3.2', 'Lesson 3.3'] },
  ];


}
