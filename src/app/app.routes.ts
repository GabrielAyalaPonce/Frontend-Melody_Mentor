import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { MusicalScalesComponent } from './pages/musical-scales/musical-scales.component';
import { MusicalChordsComponent } from './pages/musical-chords/musical-chords.component';
import { MusicalRhythmsComponent } from './pages/musical-rhythms/musical-rhythms.component';
import { VirtualPianoComponent } from './pages/virtual-piano/virtual-piano.component';
import { ScaleDetailComponent } from './pages/musical-scales/scale-detail/scale-detail.component';
import { ChordsSubcategoryComponent } from './pages/musical-chords/chords-subcategory/chords-subcategory.component';
import { ChordDetailComponent } from './pages/musical-chords/chord-detail/chord-detail.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'scales', component: MusicalScalesComponent },
  { path: 'resources/musical-scales', component: MusicalScalesComponent },
  { path: 'resources/musical-scales/:type', component: ScaleDetailComponent },
  { path: 'chords', component: MusicalChordsComponent },
  { path: 'resources/musical-chords/:subcategory',component: ChordsSubcategoryComponent},
  { path: 'resources/musical-chords/chord-detail/:type',component: ChordDetailComponent},
  { path: 'lessons/', component: LessonsComponent },
  { path: 'rhythms', component: MusicalRhythmsComponent }
];
