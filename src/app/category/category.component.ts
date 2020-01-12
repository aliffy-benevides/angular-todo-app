import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name: string = 'Category';
  title: string = 'Categorias';
  categories: Category[] = [];

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.list()
      .subscribe(data => this.categories = data)
  }

}
