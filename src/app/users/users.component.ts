import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  userForms: Array<FormGroup> = new Array<FormGroup>();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.users = this.userService.getUsers();
    this.bindForms();
  }

  bindForms() {
    this.userForms = new Array<FormGroup>();
    for (const [i, user] of this.users.entries()) {
      const form = this.formBuilder.group(
        {
          email: [user.email, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
          ]],
          password: [user.password, [
            Validators.required,
            Validators.minLength(7),
            Validators.pattern(/^[a-zA-Z0-9]*$/),
          ]],
          confirmPassword: user.confirmPassword,
          nickName: [user.nickName, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9,-]*$/),
          ]],
          phone: [user.phone, [
            Validators.required,
            Validators.pattern(/^[+380]+[0-9]{9}$/),
          ]],
          website: [user.website, [
            Validators.required,
            Validators.pattern(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/),
          ]],
          license: user.license
        }
      );
      form.valueChanges.subscribe({
        next: this.formChange.bind(this, i)
      });
      this.userForms.push(form);
    }
  }

  formChange(index, form) {
    console.log(form);
    if (this.userForms[index].valid) {
      this.userService.updateUser(index, form);
      this.users = this.userService.getUsers();
      this.bindForms();
    }
  }

  ngOnInit() {
  }

  removeUser(id) {
    this.users = [...this.userService.removeUser(id)];
    this.bindForms();
  }
  email(i) {
    return this.userForms[i].get('email') as FormControl;
  }
  password(i) {
    return this.userForms[i].get('password') as FormControl;
  }
  nickName(i) {
    return this.userForms[i].get('nickName') as FormControl;
  }
  phone(i) {
    return this.userForms[i].get('phone') as FormControl;
  }
  website(i) {
    return this.userForms[i].get('website') as FormControl;
  }
}
