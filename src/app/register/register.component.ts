import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private userService: UserService
  ) {
    this.registerForm = formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^[a-zA-Z0-9]*$/),
      ]],
      confirmPassword: '',
      nickName: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9,-]*$/),
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[+380]+[0-9]{9}$/),
      ]],
      website: ['', [
        Validators.required,
        Validators.pattern(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/),
      ]],
      license: false
    }, {
        validators: this.confirmPasswordValidator
      });
  }

  ngOnInit() {
  }
  confirmPasswordValidator(formGroup) {
    const mainPass = formGroup.get('password').value;
    const confirmPass = formGroup.get('confirmPassword').value;


    const passwordStatus = mainPass === confirmPass;

    const valResult = {
      passwordStatus
    };
    return valResult.passwordStatus ? null : valResult;
  }

  onSubmit(user) {
    this.registerService.registerUser(user);
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
  get nickName() {
    return this.registerForm.get('nickName') as FormControl;
  }
  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }
  get website() {
    return this.registerForm.get('website') as FormControl;
  }
  get license() {
    return this.registerForm.get('license') as FormControl;
  }

}
