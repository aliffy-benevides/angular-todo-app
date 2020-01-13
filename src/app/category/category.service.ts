import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseApiUrl = environment.baseApiUrl
  private readonly baseServiceUrl = `${this.baseApiUrl}categories`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Category[]>(this.baseServiceUrl);
  }

  get(id) {
    return this.http.get<Category>(`${this.baseServiceUrl}/${id}`);
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
