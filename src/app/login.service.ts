import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser;

  constructor(
    private userService: UserService
  ) {
    if (localStorage.getItem('User')) {
      this.currentUser = { ...JSON.parse(localStorage.getItem('User')) };
    }
  }

  /**
   * @return User | false
   * @param email String
   * @param password String
   */
  login(email, password) {
    this.currentUser = this.userService.getUserByEmailAndPassword(email, password);
    if (this.currentUser) {
      localStorage.setItem('User', JSON.stringify(this.currentUser));
    }

    return this.currentUser ? this.currentUser : false;
  }
  isLoggedIn() {
    return this.currentUser ? true : false;
  }

  get user() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem('User');
  }
}
