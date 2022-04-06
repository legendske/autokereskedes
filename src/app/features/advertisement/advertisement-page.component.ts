import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement-page.component.html',
})
export class AdvertisementPageComponent {
  constructor(private authService: AuthService) {}

  get currentUser() {
    return this.authService.currentUser;
  }
}
