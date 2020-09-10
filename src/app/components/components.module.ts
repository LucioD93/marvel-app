import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { HeroCardModule } from './hero-card/hero-card.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    HeroCardModule
  ]
})
export class ComponentsModule { }
