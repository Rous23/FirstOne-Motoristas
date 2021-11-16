import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrdenTomadaComponent } from './modal-orden-tomada.component';

describe('ModalOrdenTomadaComponent', () => {
  let component: ModalOrdenTomadaComponent;
  let fixture: ComponentFixture<ModalOrdenTomadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrdenTomadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrdenTomadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
