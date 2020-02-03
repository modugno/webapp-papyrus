import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpToolbarComponent } from './pp-toolbar.component';

describe('PpToolbarComponent', () => {
  let component: PpToolbarComponent;
  let fixture: ComponentFixture<PpToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
