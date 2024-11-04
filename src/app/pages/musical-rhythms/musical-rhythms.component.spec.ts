import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalRhythmsComponent } from './musical-rhythms.component';

describe('MusicalRhythmsComponent', () => {
  let component: MusicalRhythmsComponent;
  let fixture: ComponentFixture<MusicalRhythmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicalRhythmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicalRhythmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
