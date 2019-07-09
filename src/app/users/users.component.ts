import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    for (const user of this.users) {
      const form = formBuilder.group(user);
      form.valueChanges.subscribe(this.formChange);
      this.userForms.push(form);
    }
  }

  formChange(par1) {
    console.log(par1);
  }

  ngOnInit() {
  }

}
