import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpSearchComponent } from './pp-search.component';

describe('PpSearchComponent', () => {
  let component: PpSearchComponent;
  let fixture: ComponentFixture<PpSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
