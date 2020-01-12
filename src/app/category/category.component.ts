import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from './category.service';
import { Category } from './category';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name: string = 'Category';
  title: string = 'Categorias';
  categories: Category[] = [];

  category: Category = null;

  listSubscription: Subscription = null;
  getSubscription: Subscription = null;
  paramsSubscription: Subscription = null;

  constructor(
    private service: CategoryService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.listSubscription = this.service.list()
      .subscribe(data => this.categories = data)

    this.paramsSubscription = this.route.params
      .subscribe((params: any) => {
        const categoryId = params['categoryId']

        if (categoryId) {
          if (categoryId === 'new') {
            this.category = {
              id: '',
              name: ''
            }
          } else {
            this.getSubscription = this.service.get(categoryId)
              .subscribe(
                category => this.category = category,
                error => {
                  console.error('Erro na requisição da categoria', error);
                  this.router.navigate(['categories']);
                }
              )
          }
        }
      })
  }

  ngOnDestroy() {
    this.listSubscription && this.listSubscription.unsubscribe();
    this.getSubscription && this.getSubscription.unsubscribe();
    this.paramsSubscription && this.paramsSubscription.unsubscribe();
  }
}
