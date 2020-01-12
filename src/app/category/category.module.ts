import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category.component';
import { ContentModule } from '../content/content.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ContentModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
