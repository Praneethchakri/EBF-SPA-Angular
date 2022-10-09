import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EBFEmployeeService } from '../ebf-employee.service'
import { Router } from '@angular/router';
import { Company } from '../company';
import { EbfModel } from '../ebfModel';
@Component({
  selector: 'app-ebf-employee-list',
  templateUrl: './ebf-employee-list.component.html',
  styleUrls: ['./ebf-employee-list.component.scss']
})
export class EBFEmployeeListComponent implements OnInit {

  employees: Employee[];
  company: Company = new Company();
  ebfModel: EbfModel = new EbfModel();
  number: Number;
  avarageSalary: Number;
  constructor(private employeeService: EBFEmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      //  data= Object.assign(this.employees, this.company);
      this.employees = data;
      // this.company
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['ebf-employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-ebf-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
/*  avgSalary(employees: Employee[]){
    // this.employeeService.employessAvgSalary().subscribe(data => {
            // console.log('employees list ',data);
  console.log('data',this.employeeService.employessAvgSalary());
  // console.log('data',this.employees);
  //             this.employeeService.employessAvgSalary().subscribe(
  //               res => {
                  // this.employees = res;
                  this.employees.forEach(function (item) {
                    console.log(item);
                    console.log(item.salary);
                    console.log(item.emp_id);
                    
                  });
          
                // },
                // err => {
                //   console.log(err);
                // }
              // );
      
      // this.number=data;
    // });   
  }*/
avgSalary(employees: Employee[]){
  // let employees = [1, "string", false];
console.log('list size ',employees.length);
let avarageSalary=0;
for (let entry of employees) {
    console.log(entry.salary); // 1, "string", false
    avarageSalary+=entry.salary;
}
console.log(avarageSalary,"~~~~>Final Sum ");
console.log(avarageSalary/employees.length,"Average ~~~");
this.avarageSalary =avarageSalary/employees.length;
}

}