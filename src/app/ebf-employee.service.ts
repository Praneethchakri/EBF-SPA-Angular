import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, Observable } from 'rxjs';
import { Employee } from './employee';
import { Company } from './company';
@Injectable({
  providedIn: 'root'
})
export class EBFEmployeeService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  createEmployee(employee: Employee,company: Company): Observable<Object>{
    // , company: Company
    console.log('Company ',company);
    console.log('Company ',employee);
    // console.log('MErged Data ~~~',Object.assign(employee,company));
        
        return this.httpClient.post(`${this.baseURL}/createEmployees`, {employee,company});
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id: number, employee: Employee,company: Company): Observable<Object>{
    console.log("checking update ~~~~" , employee);
    console.log("checking update ~~~~" , company);
    return this.httpClient.put(`${this.baseURL}/updateEmployee/${id}`, {employee,company});
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteEmployee/${id}`);
  }
  employessAvgSalary(): Observable<any>{
    console.log('Value~~',this);
    return this.httpClient.get<any>(`${this.baseURL}/avgSalary`);   
  }
 
}