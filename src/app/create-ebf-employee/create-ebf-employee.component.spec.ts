import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEbfEmployeeComponent } from './create-ebf-employee.component';

describe('CreateEbfEmployeeComponent', () => {
  let component: CreateEbfEmployeeComponent;
  let fixture: ComponentFixture<CreateEbfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEbfEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEbfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
