import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item.component';
import { ContentModule } from '../content/content.module'

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ContentModule
  ]
})
export class ItemModule { }
