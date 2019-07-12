import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reduce, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}
interface IRegisterForm {
  name: string;
  salary: string;
  age: string;
}



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  host = 'http://dummy.restapiexample.com/api/v1';

  constructor(
    private httpClient: HttpClient
  ) { }

  getEmplyees() {
    return this.httpClient.get(`${this.host}/employees`).pipe(map((employees: Array<IEmployee>) => {
      return employees.map((employee) => {
        const { id, employee_name, employee_salary, employee_age } = employee;

        return {
          id,
          name: employee_name,
          salary: employee_salary,
          age: employee_age
        };
      });
    }));
  }

  getEmployeeByID(userId) {
    return this.httpClient.get(`${this.host}/employee/${userId}`).pipe(map((employee: IEmployee) => {
      const { id, employee_name, employee_salary, employee_age } = employee;
      return {
        id,
        name: employee_name,
        salary: employee_salary,
        age: employee_age
      };
    }));
  }

  createEmplyee(formData: IRegisterForm) {
    const { name, salary, age } = formData;
    console.log(formData);
    return this.httpClient.post<IRegisterForm>(`${this.host}/create`, {
      name,
      salary,
      age
    }).pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    );
  }

  updateEmplyee(id, formData: IRegisterForm) {
    const { name, salary, age } = formData;
    console.log(formData);
    return this.httpClient.put<IRegisterForm>(`${this.host}/update/${id}`, {
      name,
      salary,
      age
    }).pipe(
      catchError(error => of(`Bad Promise: ${error}`))
    );
  }
}
