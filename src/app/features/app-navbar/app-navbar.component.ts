import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavBarComponent {
  constructor(readonly authService: AuthService) {
  }

  get currentUser() {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }
}
