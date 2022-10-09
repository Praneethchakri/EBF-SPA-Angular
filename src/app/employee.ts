import { Company } from "./company";

export class Employee {
    emp_id: number;
    name: string;
    surname: string;
    email: string;
    address: string;
    salary: number;
    company_id: string;
    company: Company;
}