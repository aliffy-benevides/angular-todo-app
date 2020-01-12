import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http
import { HttpClientModule } from '@angular/common/http';

// Template
import { HeaderComponent } from './header/header.component';
import { ContentModule } from './content/content.module';

// Category
import { CategoryModule } from './category/category.module';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ContentModule,
      CategoryModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
