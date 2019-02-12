import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvmDashboardComponent } from './ovm-dashboard.component';

describe('OvmDashboardComponent', () => {
  let component: OvmDashboardComponent;
  let fixture: ComponentFixture<OvmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
