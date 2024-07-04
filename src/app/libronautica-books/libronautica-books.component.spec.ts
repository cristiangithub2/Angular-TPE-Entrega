import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibronauticaBooksComponent } from './libronautica-books.component';

describe('LibronauticaBooksComponent', () => {
  let component: LibronauticaBooksComponent;
  let fixture: ComponentFixture<LibronauticaBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibronauticaBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibronauticaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
