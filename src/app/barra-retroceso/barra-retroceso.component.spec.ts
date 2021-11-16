import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraRetrocesoComponent } from './barra-retroceso.component';

describe('BarraRetrocesoComponent', () => {
  let component: BarraRetrocesoComponent;
  let fixture: ComponentFixture<BarraRetrocesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraRetrocesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraRetrocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
