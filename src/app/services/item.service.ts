import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }

  addProduct(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/products', data);
  }

  getProductList(): Observable<any> {
    return this._http.get('http://localhost:3000/products');
  }

  deleteProduct(id:number): Observable<any> {
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }

  updateProduct(id:number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/products/${id}`, data);
  }

}


