import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reto33Component } from './reto-33.component';

describe('Reto33Component', () => {
  let component: Reto33Component;
  let fixture: ComponentFixture<Reto33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Reto33Component]
    });
    fixture = TestBed.createComponent(Reto33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
