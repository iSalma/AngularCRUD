import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Product} from './product'
import { Observable } from 'rxjs';
import { Category } from '../screen/category';
import { ProductsModule } from '../products/products.module';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpClient: HttpClient) { }

  addItem(itemBody):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products';
    return this._httpClient.post<Product>(itemUrl, itemBody);
  }

  updateItem(itemId,itemBody):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/'+itemId;
    return this._httpClient.put<Product>(itemUrl, itemBody);
  }

  deleteItem(itemId):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/'+itemId;
    return this._httpClient.delete<Product>(itemUrl);
  }

  getAllItems(): Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/';
    return this._httpClient.get<Product>(itemUrl);
  }

  getOne(itemId): Observable<Product>{
    const itemUrl = 'http://localhost:3000/products?id='+itemId;
    return this._httpClient.get<Product>(itemUrl);
  }

  getCategories():Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories/';
    return this._httpClient.get<Category>(categoriesUrl);
  }

  viewCategory(categoryId):Observable<Product>{
    const categoriesUrl = 'http://localhost:3000/products?id='+categoryId;
    return this._httpClient.get<Product>(categoriesUrl);
  }
}
