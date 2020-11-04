import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverblikComponent } from './overblik.component';

describe('OverblikComponent', () => {
  let component: OverblikComponent;
  let fixture: ComponentFixture<OverblikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverblikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverblikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
