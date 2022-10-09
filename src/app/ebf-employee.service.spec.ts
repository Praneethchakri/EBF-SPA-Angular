import { TestBed } from '@angular/core/testing';

import { EBFEmployeeService } from './ebf-employee.service';

describe('EBFEmployeeService', () => {
  let service: EBFEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EBFEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
