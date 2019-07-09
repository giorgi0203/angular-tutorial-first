import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  constructor() {
    if (localStorage.getItem('Users')) {
      this.users.push(...JSON.parse(localStorage.getItem('Users')));
    }
  }

  addUser(user) {
    this.users.push(user);
    localStorage.setItem('Users', JSON.stringify(this.users));
  }
  updateUser(id, user) {

  }
  removeUser() {
  }
  getUser() {

  }
  getUsers() {
    return this.users;
  }
}
