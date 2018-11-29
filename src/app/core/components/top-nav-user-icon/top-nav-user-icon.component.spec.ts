import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavUserIconComponent } from './top-nav-user-icon.component';

describe('TopNavUserIconComponent', () => {
  let component: TopNavUserIconComponent;
  let fixture: ComponentFixture<TopNavUserIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavUserIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavUserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
