import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import productsData from '../../products/data/porducts.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Product[] {
    return productsData;
  }

  getProduct(id: number): Observable<Product | undefined> {
   const product = productsData.find(product => product.ProductId === id);
   return of(product);
  }
  constructor() { }
}
