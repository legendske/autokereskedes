import { Component, Input } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdvertisementDialogComponent } from '../advertisement-dialog/advertisement-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ViewModels } from '../models/view-models';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent {
  @Input() advertisements: ViewModels.IAdvertisement[] | null;
  @Input() user: User | null;

  constructor(
    private readonly dialog: MatDialog,
    private readonly advertisementService: AdvertisementService
  ) {}

  async openAdvertisementDialog(advertisement: ViewModels.IAdvertisement): Promise<void> {
    const dialogRef = this.dialog.open(AdvertisementDialogComponent, {
      width: '950px',
      data: {
        advertisement,
        user: this.user,
      },
    } as MatDialogConfig<ViewModels.IAdvertisementDialogData>);

    dialogRef.afterClosed().subscribe((advertisement) => {
      if (advertisement) {
        this.advertisementService.updateAdvertisement(advertisement);
      }
    });
  }

  async openDeleteConfirmDialog(advertisementId: string): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        title: 'Hírdetés törlése',
        content: 'Biztosan szeretné törölni ezt a hírdetést?',
        buttonText: 'Mentés',
      },
    } as MatDialogConfig<ViewModels.IConfirmDialogData>);

    dialogRef.afterClosed().subscribe((shouldDelete) => {
      if (shouldDelete) {
        this.advertisementService.deleteAdvertisement(advertisementId);
      }
    });
  }

  async openUpdateStateConfirmDialog(advertisementId: string, isActive: boolean): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {
        title: `Hírdetés ${isActive ? 'aktiválása' : 'inaktiválása'}`,
        content: `Biztosan szeretné ${isActive ? 'aktiválni' : 'inaktiválni'} ezt a hírdetést?`,
        buttonText: 'Mentés',
      },
    } as MatDialogConfig<ViewModels.IConfirmDialogData>);

    dialogRef.afterClosed().subscribe((shouldUpdate) => {
      if(shouldUpdate) {
        this.advertisementService.updateAdvertisementState(advertisementId, isActive);
      }
    });
  }
}
