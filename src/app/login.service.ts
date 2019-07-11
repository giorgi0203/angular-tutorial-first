import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user;

  constructor(
    private userService: UserService
  ) { }

  login(email, password) {
    this.user = this.userService.getUserByEmailAndPassword(email, password);
    return this.user ? this.user : false;
  }
  isLoggedIn() {
    return this.user ? true : false;
  }
}
