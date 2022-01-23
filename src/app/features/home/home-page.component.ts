import { Component } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

export interface Car {
  title: string;
  description: string;
  year: number;
  isActive: boolean;
}

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public cars$: Observable<Car[]> = of([]);

  constructor(private afs: Firestore) {
    this.cars$ = collectionData<Car>(
      query<Car>(
        collection(this.afs, 'car') as CollectionReference<Car>,
        where('isActive', '==', true)
      )
    );
  }
}
