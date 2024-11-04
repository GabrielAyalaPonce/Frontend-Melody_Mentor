import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualPianoComponent } from './virtual-piano.component';

describe('VirtualPianoComponent', () => {
  let component: VirtualPianoComponent;
  let fixture: ComponentFixture<VirtualPianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualPianoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
