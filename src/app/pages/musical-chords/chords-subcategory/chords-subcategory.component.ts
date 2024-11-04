import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chords-subcategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chords-subcategory.component.html',
  styleUrl: './chords-subcategory.component.css'
})
export class ChordsSubcategoryComponent {
  @Input() category: string;

  subcategories: string[];
  descriptionSubcategory:string;

  constructor(private router: Router,private route: ActivatedRoute) {
    // Puedes inicializar las propiedades aquí si es necesario
    this.subcategories = []; // Inicializar la lista de subcategorías como un arreglo vacío
    this.category = ''; 
    this.descriptionSubcategory='';
  }
  // Puedes definir las subcategorías en el `ngOnInit` o directamente en el `@Input()`
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('subcategory') || '';
      this.setSubcategories(); // Actualiza las subcategorías según la categoría
    });

  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  setSubcategories() {
    switch (this.category) {
      case 'Acordes Basicos':
        this.subcategories = ['Mayor', 'Menor', 'Disminuido', 'Aumentado'];
        this.descriptionSubcategory="";
        break;
      case 'Acordes con Septima':
        this.subcategories = ['Maj7', '7ma', 'Menor 7', 'dim7', 'm7b5'];
        break;
      case 'Acordes con novena':
        this.subcategories = ['Maj9', '9na', 'Menor 9', '9#5', 'Menor 7b9'];
        break;
      case 'Acordes con oncena':
        this.subcategories = ['11na', 'Maj11', '11na menor'];
        break;
      case 'Acordes con trecena':
        this.subcategories = ['13na', 'Maj13', 'Menor 13'];
        break;
      case 'Acordes alterados y extensiones':
        this.subcategories = ['Maj7', '7ma', 'menor 7', 'dim7', 'm7b5'];
        break; 
      case 'Acordes con extensiones y adiciones':
        this.subcategories = ['Maj7', '7ma', 'menor 7', 'dim7', 'm7b5'];
        break;  
      default:
        this.subcategories = [];
    }

  }
}
