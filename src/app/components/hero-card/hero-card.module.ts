import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card.component';

// Angular Material Modules
import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';


@NgModule({
  declarations: [HeroCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    HeroCardComponent
  ]
})
export class HeroCardModule { }
