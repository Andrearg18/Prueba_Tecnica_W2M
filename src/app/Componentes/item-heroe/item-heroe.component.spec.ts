import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHeroeComponent } from './item-heroe.component';

describe('ItemHeroeComponent', () => {
  let component: ItemHeroeComponent;
  let fixture: ComponentFixture<ItemHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemHeroeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
