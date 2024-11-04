import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhythmDetailComponent } from './rhythm-detail.component';

describe('RhythmDetailComponent', () => {
  let component: RhythmDetailComponent;
  let fixture: ComponentFixture<RhythmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhythmDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhythmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
