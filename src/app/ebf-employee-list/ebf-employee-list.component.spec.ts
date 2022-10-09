import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbfEmployeeListComponent } from './ebf-employee-list.component';

describe('EbfEmployeeListComponent', () => {
  let component: EbfEmployeeListComponent;
  let fixture: ComponentFixture<EbfEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbfEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbfEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
