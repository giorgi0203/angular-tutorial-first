import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  currentEmployee;
  updateForm: FormGroup;

  constructor(
    private router: Router,
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder
  ) {
    this.updateForm = formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      salary: ['', [
        Validators.required,
      ]],
      age: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.employeesService.getEmployeeByID(+params.get('employeeId')).subscribe((data) => {
        this.currentEmployee = { ...data };
        const { name, age, salary } = this.currentEmployee;
        this.updateForm.setValue({ name, age, salary });
      });

    });
  }

  onSubmit(user) {
    if (this.updateForm.valid) {
      this.employeesService.updateEmplyee(this.currentEmployee.id, user).subscribe(data => console.log(data));
    } else {
      console.log(user);

    }
  }
  get name() {
    return this.updateForm.get('name') as FormControl;
  }
  get salary() {
    return this.updateForm.get('salary') as FormControl;
  }
  get age() {
    return this.updateForm.get('age') as FormControl;
  }

}
