import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute,Router } from '@angular/router';
import { EBFEmployeeService } from '../ebf-employee.service';
import { Company } from '../company';

@Component({
  selector: 'app-ebf-employee-details',
  templateUrl: './ebf-employee-details.component.html',
  styleUrls: ['./ebf-employee-details.component.scss']
})
export class EBFEmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  company: Company = new Company();
  constructor(private route: ActivatedRoute, private employeService: EBFEmployeeService
    ,private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
    this.employee=data;
      // data= this.employee;
    });
  }
  
  onSubmit(){
      this.goToEmployeeList();
      }
      
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}