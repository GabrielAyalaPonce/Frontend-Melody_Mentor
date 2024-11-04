import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsSubcategoryComponent } from './chords-subcategory.component';

describe('ChordsSubcategoryComponent', () => {
  let component: ChordsSubcategoryComponent;
  let fixture: ComponentFixture<ChordsSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChordsSubcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChordsSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
