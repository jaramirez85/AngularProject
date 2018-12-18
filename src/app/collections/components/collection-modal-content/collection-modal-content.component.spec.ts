import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionModalContentComponent } from './collection-modal-content.component';

describe('CollectionModalContentComponent', () => {
  let component: CollectionModalContentComponent;
  let fixture: ComponentFixture<CollectionModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
