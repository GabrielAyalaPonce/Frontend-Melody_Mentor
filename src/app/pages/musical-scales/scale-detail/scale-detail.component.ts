import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScaleService } from '../../../services/scale.service';
import { CommonModule } from '@angular/common';
import { Scale } from '../../../models/scale';

@Component({
  selector: 'app-scale-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scale-detail.component.html',
  styleUrl: './scale-detail.component.css',
})
export class ScaleDetailComponent {
  scales: Scale[] = []; // Array para almacenar las escalas filtradas
  scaleType: string = ''; // Tipo de escala seleccionado
  scaleFormula: string | null = null; // Propiedad para almacenar la fórmula de la escala

  constructor(
    private route: ActivatedRoute,
    private scaleService: ScaleService
  ) {}

  ngOnInit(): void {
    this.getScalesFromRoute();
  }

  getScalesFromRoute(): void {
    const type = this.route.snapshot.paramMap.get('type');

    if (!type) {
      console.error('Type is not provided in the route');
      return;
    }

    this.scaleType = type.trim();
    this.updateScaleFormula();  // Llamada aquí para actualizar la fórmula
    this.getScalesByType(this.scaleType);
  }

  getScalesByType(type: string): void {
    console.log('Fetching scales for type:', type);
    this.scaleService.getScalesByType(type).subscribe(
      (data) => {
        console.log('Received scales:', data);
        this.scales = data;
      },
      (error: any) => {
        console.error('Error fetching scales by type:', error);
      }
    );
  }
  updateScaleFormula(): void {
    switch (this.scaleType) {
      case 'Mayor':
        this.scaleFormula = 'T-T-ST-T-T-T-ST';
        break;
      case 'Menor':
        this.scaleFormula = 'T-ST-T-T-ST-T-T';
        break;
      case 'Menor armonica':
        this.scaleFormula = 'T-ST-T-T-ST-T½-ST';
        break;
      case 'Menor melodica':
        this.scaleFormula = 'T-ST-T-T-T-T-ST';
        break;
      case 'Pentatonica':
        this.scaleFormula = 'T-T-T½-T-T½';
        break;
      case 'Cromatica':
        this.scaleFormula = 'ST-ST-ST-ST-ST-ST-ST-ST-ST-ST-ST-ST';
        break;
      default:
        this.scaleFormula = 'Fórmula no disponible';
        break;
    }
    console.log('scaleFormula:', this.scaleFormula); // Agrega esto para verificar
  }
}
