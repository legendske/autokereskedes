import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {
  constructor(readonly authService: AuthService) {}

  get currentUser() {
    return this.authService.currentUser;
  }
}
