import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAccessAllowed = false;

  constructor() { }

  isUserAuthenticated() {
    return this.isAccessAllowed;
  }

  allowAccess() {
    this.isAccessAllowed = true;
  }

  denyAccess() {
    this.isAccessAllowed = false;
  }
}
