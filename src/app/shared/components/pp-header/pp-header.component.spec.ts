import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpHeaderComponent } from './pp-header.component';

describe('PpHeaderComponent', () => {
  let component: PpHeaderComponent;
  let fixture: ComponentFixture<PpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
