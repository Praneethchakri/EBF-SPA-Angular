import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbfEmployeeDetailsComponent } from './ebf-employee-details.component';

describe('EbfEmployeeDetailsComponent', () => {
  let component: EbfEmployeeDetailsComponent;
  let fixture: ComponentFixture<EbfEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbfEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbfEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
