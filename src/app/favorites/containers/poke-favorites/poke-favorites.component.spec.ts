import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavoritesComponent } from './poke-favorites.component';

describe('PokeFavoritesComponent', () => {
  let component: PokeFavoritesComponent;
  let fixture: ComponentFixture<PokeFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
