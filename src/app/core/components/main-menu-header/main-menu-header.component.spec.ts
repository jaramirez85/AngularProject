import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuHeaderComponent } from './main-menu-header.component';

describe('MainMenuHeaderComponent', () => {
  let component: MainMenuHeaderComponent;
  let fixture: ComponentFixture<MainMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
