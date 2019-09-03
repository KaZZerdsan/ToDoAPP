import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckComponentComponent } from './check-component.component';

describe('CheckComponentComponent', () => {
  let component: CheckComponentComponent;
  let fixture: ComponentFixture<CheckComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
