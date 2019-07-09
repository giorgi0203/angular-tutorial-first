import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  constructor() {
    // if (localStorage.getItem('Users')) {
    //   this.users.push(...JSON.parse(localStorage.getItem('Users')));
    // }
  }

  addUser(user) {
    this.users.push(user);
    return this.users;
    // localStorage.setItem('Users', JSON.stringify(this.users));
  }
  updateUser(id, user) {
    this.users[id] = user;
    return this.users;
  }
  removeUser(id) {
    this.users.splice(id, 1);
    return this.users;
    // localStorage.setItem('Users', JSON.stringify(this.users));
  }
  getUser() {

  }
  getUsers() {
    return this.users;
  }
}
