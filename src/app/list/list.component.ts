import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  name: string = 'List';
  title: string = 'Listas';
  lists: List[] = [];

  list: List = null;

  // baseServiceUrl: string = '/categories/1/lists';
  baseServiceUrl: string;

  listSubscription: Subscription = null;
  getSubscription: Subscription = null;
  paramsSubscription: Subscription = null;

  constructor(
    private service: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params
      .subscribe((params: any) => {
        const categoryId = params['categoryId'];
        this.baseServiceUrl = this.service.setBaseServiceUrl(categoryId);
      })
  }

  ngOnInit() {
    this.listSubscription = this.service.list()
      .subscribe(data => this.lists = data)

    this.paramsSubscription = this.route.params
      .subscribe((params: any) => {
        const categoryId = params['categoryId']
        const listId = params['listId']

        if (listId) {
          if (listId === 'new') {
            this.list = {
              id: '',
              name: ''
            }
          } else {
            this.getSubscription = this.service.get(listId)
              .subscribe(
                data => this.list = data,
                error => {
                  console.error('Erro na requisição da lista', error);
                  this.router.navigate(['/categories', categoryId, '/lists']);
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
