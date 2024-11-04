import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalScalesComponent } from './musical-scales.component';

describe('MusicalScalesComponent', () => {
  let component: MusicalScalesComponent;
  let fixture: ComponentFixture<MusicalScalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicalScalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicalScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
