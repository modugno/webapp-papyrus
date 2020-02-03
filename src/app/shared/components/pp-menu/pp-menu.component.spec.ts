import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpMenuComponent } from './pp-menu.component';

describe('PpMenuComponent', () => {
  let component: PpMenuComponent;
  let fixture: ComponentFixture<PpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
