import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromativoComponent } from './infromativo.component';

describe('InfromativoComponent', () => {
  let component: InfromativoComponent;
  let fixture: ComponentFixture<InfromativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfromativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfromativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
