import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  updatePassword,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  get currentUser(): User | null {
    return this.user;
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  // updatePassword(newPassword: string) {
  //   if (this.user) {
  //     return updatePassword(this.user, newPassword);
  //   }
  // }
}
