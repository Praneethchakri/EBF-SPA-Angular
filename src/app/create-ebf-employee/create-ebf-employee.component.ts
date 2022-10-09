import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EBFEmployeeService } from '../ebf-employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Company } from '../company';
import { EbfModel } from '../ebfModel';

@Component({
  selector: 'app-create-ebf-employee',
  templateUrl: './create-ebf-employee.component.html',
  styleUrls: ['./create-ebf-employee.component.scss']
})
export class CreateEBFEmployeeComponent implements OnInit {
  
    employee: Employee = new Employee();
  company: Company = new Company();
  // ebfModel: EbfModel = new EbfModel
  constructor(private employeeService: EBFEmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    }

  saveEmployee(){
    console.log('Save Value ~~~~~~',this.company);
    console.log('Save Value of Employee~~~~~ ',this.employee);
    this.employeeService.createEmployee(this.employee,this.company).subscribe( data =>{
      // ,this.compan     
      // const employeWithcompany =Object.assign(this.employee,this.company);
      // console.log(employeWithcompany);
      console.log('Employee check ',this.employee);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(any:String){
    console.log(this.employee);
    this.saveEmployee();
  }
}