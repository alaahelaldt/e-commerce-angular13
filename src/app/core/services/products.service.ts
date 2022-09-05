import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import productsData from '../../products/data/porducts.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Get all product from json file 

  getAllProducts(): Product[] {
    return productsData;
  }

  //Get all products by ID 

  getAllProduct(id: number): Observable<Product | undefined> {
   const product = productsData.find(product => product.ProductId === id);
   return of(product);
  }
  constructor() { }
}
