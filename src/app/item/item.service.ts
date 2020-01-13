import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Item } from './item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly baseApiUrl = environment.baseApiUrl
  private baseServiceUrl = `${this.baseApiUrl}categories`

  constructor(private http: HttpClient) { }

  setBaseServiceUrl(categoryId, listId) {
    if(!this.baseServiceUrl.includes('lists')) {
      this.baseServiceUrl += `/${categoryId}/lists/${listId}/items`;
    }
    return this.baseServiceUrl.replace(this.baseApiUrl, '/');
  }

  list() {
    return this.http.get<Item[]>(this.baseServiceUrl);
  }

  get(id) {
    return this.http.get<Item>(`${this.baseServiceUrl}/${id}`);
  }

  save(body) {
    if (body.id) {
      return this.http.put(`${this.baseServiceUrl}/${body.id}`, body)
    } else {
      return this.http.post(`${this.baseServiceUrl}`, body)
    }
  }

  remove(id) {
    return this.http.delete(`${this.baseServiceUrl}/${id}`);
  }
}
