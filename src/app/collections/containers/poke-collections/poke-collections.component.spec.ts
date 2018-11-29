import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCollectionsComponent } from './poke-collections.component';

describe('PokeCollectionsComponent', () => {
  let component: PokeCollectionsComponent;
  let fixture: ComponentFixture<PokeCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
