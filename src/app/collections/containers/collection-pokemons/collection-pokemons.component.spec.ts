import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPokemonsComponent } from './collection-pokemons.component';

describe('CollectionPokemonsComponent', () => {
  let component: CollectionPokemonsComponent;
  let fixture: ComponentFixture<CollectionPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
