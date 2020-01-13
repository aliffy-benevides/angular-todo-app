import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:categoryId', component: CategoryComponent },
  { path: 'categories/:categoryId/lists', component: ListComponent },
  { path: 'categories/:categoryId/lists/:listId', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
