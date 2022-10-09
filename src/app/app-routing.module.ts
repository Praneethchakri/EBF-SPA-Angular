import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EBFEmployeeListComponent } from './ebf-employee-list/ebf-employee-list.component';
import { CreateEBFEmployeeComponent } from './create-ebf-employee/create-ebf-employee.component';
import { UpdateEBFEmployeeComponent } from './update-ebf-employee/update-ebf-employee.component';
import { EBFEmployeeDetailsComponent } from './ebf-employee-details/ebf-employee-details.component';

const routes: Routes = [
  {path: 'employees', component: EBFEmployeeListComponent},
  {path: 'create-ebf-employee', component: CreateEBFEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-ebf-employee/:id', component: UpdateEBFEmployeeComponent},
  {path: 'ebf-employee-details/:id', component: EBFEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }