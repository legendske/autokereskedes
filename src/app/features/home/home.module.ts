import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
