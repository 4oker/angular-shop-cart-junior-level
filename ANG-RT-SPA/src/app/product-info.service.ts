import { Injectable } from '@angular/core';

import { Product} from './product';
import {PRODUCTS} from './mock-products';
import { Observable, of} from 'rxjs';
import {Car} from './car';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  navbarCarCount = 0;

   
   carsProducts: Observable<Product[]>;
   storeProducts:Observable<Product[]>;
   product:Observable<Product>;
  

  constructor(){ 
  
    this.calculateCarProdCounts(); 
   }
  
  
  
 getProduct(id:number){
   this.product = this.getProducts().pipe(map(storeProducts=>storeProducts.find(product=>product.id===id)));
   return this.product;
 }
  
  getProducts():Observable<Product[]>{
    return of(PRODUCTS);
  }
  getCarsProducts(): Product[]{
    const products: Product[] = JSON.parse(localStorage.getItem('product_item')) || [];

		return products;
   
  }
  addFc(product:Product):void{
    let a: Product[];
		a = JSON.parse(localStorage.getItem('product_item')) || [];
		a.push(product);
    localStorage.setItem('product_item', JSON.stringify(a));
    this.calculateCarProdCounts();
  }



  deleteFc(product:Product):void{
    const products: Product[] = JSON.parse(localStorage.getItem('product_item'));
    for(var i=0;i<products.length;i++){
      if(products[i].id === product.id)
      {  
        products.splice(i,1);
        break;
      }           
    }
    localStorage.setItem('product_item', JSON.stringify(products));
    this.calculateCarProdCounts();
  }
   
  
  
    

  calculateCarProdCounts() {
    this.navbarCarCount = this.getCarsProducts().length;
  }


  }


  export class Item {
    product: Product;
    quantity:number;
  }