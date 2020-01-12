import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentContentComponent } from './content-content/content-content.component';

@NgModule({
  declarations: [
    ContentComponent, 
    ContentHeaderComponent, 
    ContentContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
