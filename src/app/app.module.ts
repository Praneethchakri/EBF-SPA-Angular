import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EBFEmployeeListComponent } from './ebf-employee-list/ebf-employee-list.component';
import { CreateEBFEmployeeComponent } from './create-ebf-employee/create-ebf-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEBFEmployeeComponent } from './update-ebf-employee/update-ebf-employee.component';
import { EBFEmployeeDetailsComponent } from './ebf-employee-details/ebf-employee-details.component'

@NgModule({
  declarations: [
    AppComponent,
    EBFEmployeeListComponent,
    CreateEBFEmployeeComponent,
    UpdateEBFEmployeeComponent,
    EBFEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }