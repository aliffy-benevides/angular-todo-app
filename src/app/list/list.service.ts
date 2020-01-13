import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../environments/environment';

import { List } from './list'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly baseApiUrl = environment.baseApiUrl
  private baseServiceUrl = `${this.baseApiUrl}categories`

  constructor(
    private http: HttpClient,
  ) { }

  setBaseServiceUrl(categoryId) {
    if(!this.baseServiceUrl.includes('lists')) {
      this.baseServiceUrl += `/${categoryId}/lists`;
    }
    return this.baseServiceUrl.replace(this.baseApiUrl, '/');
  }

  list() {
    return this.http.get<List[]>(this.baseServiceUrl);
  }

  get(id) {
    return this.http.get<List>(`${this.baseServiceUrl}/${id}`);
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
