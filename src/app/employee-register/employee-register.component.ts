import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  emplyeeRegisterForm;

  constructor(
    private formBuilder: FormBuilder,
    private emplyeesService: EmployeesService
  ) {
    this.emplyeeRegisterForm = formBuilder.group({
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

  onSubmit(user) {
    if (this.emplyeeRegisterForm.valid) {
      this.emplyeesService.createEmplyee(user).subscribe(data => console.log(data));
    }
  }


  ngOnInit() {
  }

  get name() {
    return this.emplyeeRegisterForm.get('name') as FormControl;
  }
  get salary() {
    return this.emplyeeRegisterForm.get('salary') as FormControl;
  }
  get age() {
    return this.emplyeeRegisterForm.get('age') as FormControl;
  }

}
