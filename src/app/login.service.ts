import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user;

  constructor(
    private userService: UserService
  ) {
    if (localStorage.getItem('User')) {
      this.user = { ...JSON.parse(localStorage.getItem('User')) };
    }
  }

  /**
   * @return User | false
   * @param email String
   * @param password String
   */
  login(email, password) {
    this.user = this.userService.getUserByEmailAndPassword(email, password);
    if (this.user) {
      localStorage.setItem('User', JSON.stringify(this.user));
    }

    return this.user ? this.user : false;
  }
  isLoggedIn() {
    return this.user ? true : false;
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('User');
  }
}
