import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

// Angular Material Modules
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
