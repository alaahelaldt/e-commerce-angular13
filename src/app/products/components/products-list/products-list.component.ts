import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/products';
import productsData from '../../data/porducts.json'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] =productsData
  constructor() { }

  ngOnInit(): void {
  }

}
