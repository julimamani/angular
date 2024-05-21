import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto5Component } from './punto5.component';

describe('Punto5Component', () => {
  let component: Punto5Component;
  let fixture: ComponentFixture<Punto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Punto5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
