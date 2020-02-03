import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpCardComponent } from './pp-card.component';

describe('PpCardComponent', () => {
  let component: PpCardComponent;
  let fixture: ComponentFixture<PpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
