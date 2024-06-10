import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHeroeComponent } from './detalles-heroe.component';

describe('DetallesHeroeComponent', () => {
  let component: DetallesHeroeComponent;
  let fixture: ComponentFixture<DetallesHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
