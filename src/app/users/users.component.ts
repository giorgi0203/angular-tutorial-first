import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

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
    private loginService: LoginService,
  ) {
    this.users = this.userService.getUsers();
    this.bindForms();
  }

  bindForms() {
    this.userForms = new Array<FormGroup>();
    for (const [i, user] of this.users.entries()) {
      const form = this.formBuilder.group(
        {
          email: [{ value: user.email, disabled: this.currentUser.email !== user.email }, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
          ]],
          password: [{ value: user.password, disabled: this.currentUser.email !== user.email }, [
            Validators.required,
            Validators.minLength(7),
            Validators.pattern(/^[a-zA-Z0-9]*$/),
          ]],
          confirmPassword: user.confirmPassword,
          nickName: [{ value: user.nickName, disabled: this.currentUser.email !== user.email }, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9,-]*$/),
          ]],
          phone: [{ value: user.phone, disabled: this.currentUser.email !== user.email }, [
            Validators.required,
            Validators.pattern(/^[+380]+[0-9]{9}$/),
          ]],
          website: [{ value: user.website, disabled: this.currentUser.email !== user.email }, [
            Validators.required,
            Validators.pattern(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/),
          ]],
          license: { value: user.license, disabled: this.currentUser.email !== user.email }
        }
      );
      form.valueChanges.subscribe({
        next: this.formChange.bind(this, i)
      });
      this.userForms.push(form);
    }
  }

  formChange(index, form) {
    if (this.userForms[index].valid) {
      this.userService.updateUser(index, form);
      this.users = this.userService.getUsers();
      this.bindForms();
    }
  }

  ngOnInit() {
  }

  removeUser(id, modal) {
    modal.show().subscribe(({ closeReason }) => {
      if (closeReason === 'CANCEL') {

      } else if (closeReason === 'OK') {
        this.users = [...this.userService.removeUser(id)];
        this.bindForms();
      }

    });

  }
  get currentUser() {
    return this.loginService.user;
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
