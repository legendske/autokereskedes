import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { LoginData } from '../auth.types';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  register(data: LoginData): void {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }
}
