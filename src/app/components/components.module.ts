import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderModule } from './shared/header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderModule
  ]
})
export class ComponentsModule { }
