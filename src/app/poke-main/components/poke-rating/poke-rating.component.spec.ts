import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeRatingComponent } from './poke-rating.component';

describe('PokeRatingComponent', () => {
  let component: PokeRatingComponent;
  let fixture: ComponentFixture<PokeRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
