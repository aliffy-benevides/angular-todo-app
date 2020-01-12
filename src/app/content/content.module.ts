import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { ContentComponent } from './content.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFormComponent } from './content-form/content-form.component';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ContentComponent, 
    ContentHeaderComponent, 
    ContentListComponent, ContentFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
