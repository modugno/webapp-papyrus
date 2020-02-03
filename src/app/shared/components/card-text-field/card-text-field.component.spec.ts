import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextFieldComponent } from './card-text-field.component';

describe('CardTextFieldComponent', () => {
  let component: CardTextFieldComponent;
  let fixture: ComponentFixture<CardTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
