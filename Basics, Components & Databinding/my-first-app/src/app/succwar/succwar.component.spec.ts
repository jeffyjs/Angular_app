import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccwarComponent } from './succwar.component';

describe('SuccwarComponent', () => {
  let component: SuccwarComponent;
  let fixture: ComponentFixture<SuccwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
