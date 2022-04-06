import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { LoginData } from '../auth.types';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(loginData: LoginData): void {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }
}
