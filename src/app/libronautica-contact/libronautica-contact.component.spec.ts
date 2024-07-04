import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibronauticaContactComponent } from './libronautica-contact.component';

describe('LibronauticaContactComponent', () => {
  let component: LibronauticaContactComponent;
  let fixture: ComponentFixture<LibronauticaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibronauticaContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibronauticaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
