import { Component, OnInit } from '@angular/core';
import { EBFEmployeeService } from '../ebf-employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';

@Component({
  selector: 'app-update-ebf-employee',
  templateUrl: './update-ebf-employee.component.html',
  styleUrls: ['./update-ebf-employee.component.scss']
})
export class UpdateEBFEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  company: Company = new Company();
  constructor(private employeeService: EBFEmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      // data = Object.assign(this.employee, this.company);
        this.employee=data;
        console.log('before update ',this.employee);
    }, error => console.log(error));
  }

  onSubmit(any:String){
    this.employeeService.updateEmployee(this.id, this.employee,this.company).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }
  onSubmitWithNoChange(){
    this.goToEmployeeList();
    }
    

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}