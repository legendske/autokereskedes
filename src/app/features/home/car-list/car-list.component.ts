import { Component, Input } from '@angular/core';
import { Car } from '../home-page.component';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  @Input() cars: Car[] | null;
}
