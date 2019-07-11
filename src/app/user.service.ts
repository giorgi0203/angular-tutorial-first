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
    return this.users;
  }
  updateUser(id, user) {
    this.users[id] = user;
    return this.users;
  }
  removeUser(id) {
    this.users.splice(id, 1);
    localStorage.setItem('Users', JSON.stringify(this.users));
    return this.users;
  }
  getUserByEmailAndPassword(email, password) {
    return this.users.find(user => user.email === email && user.password === password);
  }
  getUsers() {
    return this.users;
  }
}
