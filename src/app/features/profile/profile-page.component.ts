import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile-page.component.html',
})
/*
export class ProfilePageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formPassword: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    passwordAgain: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  constructor(readonly authService: AuthService) {}

  get currentUser() {
    return this.authService.currentUser;
  }
}
*/
export class ProfilePageComponent {
  constructor(readonly authService: AuthService) {}

  get currentUser() {
    return this.authService.currentUser;
  }
}

