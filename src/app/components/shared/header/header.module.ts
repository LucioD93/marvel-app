import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

// Angular Material modules
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    MatToolbarModule,
    MatIconModule
  ]
})
export class HeaderModule { }
