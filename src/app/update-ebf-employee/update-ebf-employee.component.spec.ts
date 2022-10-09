import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEbfEmployeeComponent } from './update-ebf-employee.component';

describe('UpdateEbfEmployeeComponent', () => {
  let component: UpdateEbfEmployeeComponent;
  let fixture: ComponentFixture<UpdateEbfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEbfEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEbfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
