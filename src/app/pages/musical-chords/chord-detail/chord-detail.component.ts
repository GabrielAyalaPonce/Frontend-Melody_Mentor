import { Component, OnInit } from '@angular/core';
import { Chord } from '../../../models/Chord';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { ChordService } from '../../../services/chord.service';

@Component({
  selector: 'app-chord-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chord-detail.component.html',
  styleUrls: ['./chord-detail.component.css'], // Cambié 'styleUrl' a 'styleUrls'
})
export class ChordDetailComponent {
  chords: Chord[] = [];
  chordType: string = '';
  chordComposition: string = '';

  constructor(
    private route: ActivatedRoute,
    private chordService: ChordService
  ) {
    console.log('ChordDetailComponent constructor called');
  }

  ngOnInit(): void {
    this.getChordsFromRoute();
  }

  getChordsFromRoute(): void {
    const type = decodeURIComponent(this.route.snapshot.paramMap.get('type') || '');

    if (!type) {
      console.error('Type is not provided in the route');
      return;
    }
    this.chordType = type.trim();
    this.updateChordComposition(); // Llamada aquí para actualizar la fórmula
    this.getChordsByType(this.chordType);
  }
  getChordsByType(type: string): void {
    console.log('Fetching chords for type:', type);
    this.chordService.getChordsByType(type).subscribe(
      (data) => {
        console.log('Received chords:', data);
        this.chords = data;
      },
      (error: any) => {
        console.error('Error fetching chords by type:', error);
      }
    );
  }
  updateChordComposition(): void {
    switch (this.chordType) {
      case 'Mayor':
        this.chordComposition = '1-3-5';
        break;
      case 'Menor':
        this.chordComposition = '1-3b-5';
        break;
      case 'Disminuido':
        this.chordComposition = '1-3b-5b';
        break;
      case 'Aumentado':
        this.chordComposition = '1-3-5#';
        break;
      case 'Maj7':
        this.chordComposition = '1-3-5-7';
        break;
      case '7ma':
        this.chordComposition = '1-3-5-7b';
        break;
      case 'Menor 7':
        this.chordComposition = '1-3b-5-7b';
        break;
      case 'Menor Maj7':
        this.chordComposition = '1-3b-5-7';
        break;
      case 'dim7':
        this.chordComposition = '1-3b-5b-6';
        break;
      case 'Maj9':
        this.chordComposition = '1-3-5-7-9';
        break;
      case 'Menor 9':
        this.chordComposition = '1-3b-5-7b-9';
        break;
      case '9na':
        this.chordComposition = '1-3-5-7b-9';
        break;
      case 'Menor 7b9':
        this.chordComposition = '1-3b-5-7b-9b';
        break;
      case '9#5':
        this.chordComposition = '1-3-5-7b-9#';
        break;
      case 'm7b5':
        this.chordComposition = '1-3b-5-7b-9b';
        break;
      case '11na':
        this.chordComposition = '1-3-5-';
        break;
      case 'Maj11':
        this.chordComposition = '1-3-5-9-11';
        break;
      case '11na menor':
        this.chordComposition = '1-3-5-7b-9b';
        break;
      case '13na':
        this.chordComposition = '1-3-5-7b-9b';
        break;
      case 'Maj13':
        this.chordComposition = '1-3-5-7b-9b';
        break;
      case 'Menor 13':
        this.chordComposition = '1-3b-5-7-9b';
        break;
      case 'add9':
        this.chordComposition = '1-3-5-9';
        break;
      case 'add11':
        this.chordComposition = '1-3-5-11';
        break;
      case 'add13':
        this.chordComposition = '1-3-5-13';
        break;
      case 'aug11':
        this.chordComposition = '1-3-5-11#';
        break;
      case '6':
        this.chordComposition = '1-3-5-6';
        break;
      default:
        this.chordComposition = 'Fórmula no disponible';
        break;
    }
    console.log('chordComposition:', this.chordComposition); // Agrega esto para verificar
  }
}
