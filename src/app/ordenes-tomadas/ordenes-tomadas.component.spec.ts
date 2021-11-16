import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTomadasComponent } from './ordenes-tomadas.component';

describe('OrdenesTomadasComponent', () => {
  let component: OrdenesTomadasComponent;
  let fixture: ComponentFixture<OrdenesTomadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesTomadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesTomadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
