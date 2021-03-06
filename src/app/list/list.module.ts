import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ContentModule } from '../content/content.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ContentModule
  ]
})
export class ListModule { }
