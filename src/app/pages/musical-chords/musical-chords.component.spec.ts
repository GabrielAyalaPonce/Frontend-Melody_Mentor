import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalChordsComponent } from './musical-chords.component';

describe('MusicalChordsComponent', () => {
  let component: MusicalChordsComponent;
  let fixture: ComponentFixture<MusicalChordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicalChordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicalChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
