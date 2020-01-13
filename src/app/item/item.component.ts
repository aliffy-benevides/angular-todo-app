import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ItemService } from './item.service'
import { Item } from './item'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name: string = 'Item';
  title: string = 'Itens';
  items: Item[] = [];

  item: Item = null;

  baseServiceUrl: string;

  listSubscription: Subscription = null;
  getSubscription: Subscription = null;
  paramsSubscription: Subscription = null;
  getBaseServiceUrlSubscription: Subscription = null;
  
  constructor(
    private service: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getBaseServiceUrlSubscription = this.route.params
      .subscribe((params: any) => {
        const categoryId = params['categoryId'];
        const listId = params['listId'];
        this.baseServiceUrl = this.service.setBaseServiceUrl(categoryId, listId);
      })
  }

  ngOnInit() {
    this.listSubscription = this.service.list()
      .subscribe(data => this.items = data)

      this.paramsSubscription = this.route.params
      .subscribe((params: any) => {
        const categoryId = params['categoryId']
        const listId = params['listId']
        const itemId = params['itemId']

        if (itemId) {
          if (itemId === 'new') {
            this.item = {
              id: '',
              name: '',
              done: false
            }
          } else {
            this.getSubscription = this.service.get(itemId)
              .subscribe(
                data => this.item = data,
                error => {
                  console.error('Erro na requisição do item', error);
                  this.router.navigate(['/categories', categoryId, 'lists', listId, 'items']);
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
    this.getBaseServiceUrlSubscription && this.getBaseServiceUrlSubscription.unsubscribe();
  }
}
