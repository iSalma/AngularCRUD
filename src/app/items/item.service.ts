import {  Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Product} from './product'
import { Observable } from 'rxjs';
import { Category } from '../screen/category';
import { ScreenModule } from '../screen/screen.module';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpClient: HttpClient) { }

  addItem(itemBody):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products';
    return this._httpClient.post<Product>(itemUrl, itemBody);
  }
  addCategory(catId):Observable<Category>{
    const itemUrl = 'http://localhost:3000/categories';
    return this._httpClient.post<Category>(itemUrl, catId);
  }

  updateItem(itemId,itemBody):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/'+itemId;
    return this._httpClient.put<Product>(itemUrl, itemBody);
  }

  deleteItem(itemId):Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/'+itemId;
    return this._httpClient.delete<Product>(itemUrl);
  }

  getAllItems(page, limit): Observable<Product>{
    const itemUrl = 'http://localhost:3000/products?_page='+page+'&_limit='+limit;
    return this._httpClient.get<Product>(itemUrl);
  }


  getOne(itemId): Observable<Product>{
    const itemUrl = 'http://localhost:3000/products/'+itemId;
    console.log(itemUrl);
    return this._httpClient.get<Product>(itemUrl);
  }

  getCategories():Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories/';
    return this._httpClient.get<Category>(categoriesUrl);
  }

  viewCategory(categoryId, page, limit):Observable<Product>{
    const categoriesUrl = 'http://localhost:3000/products?cat='+categoryId+'&_page='+page+'&_limit='+limit;
    return this._httpClient.get<Product>(categoriesUrl);
  }

  deleteCategory(categoryId):Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories/'+categoryId;
    return this._httpClient.delete<Category>(categoriesUrl);
  }

}
