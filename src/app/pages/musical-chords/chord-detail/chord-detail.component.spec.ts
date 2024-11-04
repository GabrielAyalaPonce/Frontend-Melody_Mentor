import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordDetailComponent } from './chord-detail.component';

describe('ChordDetailComponent', () => {
  let component: ChordDetailComponent;
  let fixture: ComponentFixture<ChordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChordDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
