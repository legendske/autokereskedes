import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '@firebase/auth';
import { AdvertisementDialogComponent } from 'src/app/shared/advertisement-dialog/advertisement-dialog.component';
import { ViewModels } from 'src/app/shared/models/view-models';
import { AdvertisementService } from 'src/app/shared/services/advertisement.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavBarComponent {
  constructor(
    readonly authService: AuthService,
    private readonly dialog: MatDialog,
    private readonly advertisementService: AdvertisementService,
    private readonly router: Router
  ) {}

  get currentUser(): User | null {
    return this.authService.currentUser;
  }

  async openDialog(): Promise<void> {
    const dialogRef = this.dialog.open(AdvertisementDialogComponent, {
      width: '950px',
      data: {
        advertisement: null,
        user: this.currentUser,
      },
    } as MatDialogConfig<ViewModels.IAdvertisementDialogData>);

    dialogRef.afterClosed().subscribe((advertisement) => {
      if (advertisement) {
        this.advertisementService.createAdvertisement(advertisement);
      }
    });
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/home']);
  }
}
