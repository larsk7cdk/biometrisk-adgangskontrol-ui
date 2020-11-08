import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRegistrationOverviewComponent } from './access-registration-overview.component';

describe('AccessRegistrationOverviewComponent', () => {
  let component: AccessRegistrationOverviewComponent;
  let fixture: ComponentFixture<AccessRegistrationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRegistrationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRegistrationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
