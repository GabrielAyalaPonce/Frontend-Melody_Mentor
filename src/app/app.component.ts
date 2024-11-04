import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { MusicalScalesComponent } from './pages/musical-scales/musical-scales.component';
import { MusicalChordsComponent } from './pages/musical-chords/musical-chords.component';
import { MusicalRhythmsComponent } from './pages/musical-rhythms/musical-rhythms.component';
import { VirtualPianoComponent } from './pages/virtual-piano/virtual-piano.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    HeaderComponent,
    LessonsComponent,
    ResourcesComponent,
    MusicalScalesComponent,
    MusicalChordsComponent,
    MusicalRhythmsComponent,
    VirtualPianoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'melody-mentor';
}
