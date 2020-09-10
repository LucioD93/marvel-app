import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { ComponentsModule } from 'src/app/components/components.module';

// Angular Material Modules
import { MatGridListModule } from '@angular/material';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModule,
    MatGridListModule
  ]
})
export class HomePageModule { }
