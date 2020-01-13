import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http
import { HttpClientModule } from '@angular/common/http';

// Template
import { HeaderComponent } from './header/header.component';
import { ContentModule } from './content/content.module';

// Screens
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category/category.module';
import { ListModule } from './list/list.module';
import { ItemModule } from './item/item.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ContentModule,
      CategoryModule,
      ListModule,
      ItemModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
