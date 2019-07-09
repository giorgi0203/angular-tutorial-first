import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private userService: UserService
  ) { }

  registerUser(user) {
    this.userService.addUser(user);
  }
}
