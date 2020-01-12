import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    ContentComponent, 
    ContentHeaderComponent, 
    ContentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
