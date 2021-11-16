import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesDisponiblesComponent } from './ordenes-disponibles.component';

describe('OrdenesDisponiblesComponent', () => {
  let component: OrdenesDisponiblesComponent;
  let fixture: ComponentFixture<OrdenesDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
