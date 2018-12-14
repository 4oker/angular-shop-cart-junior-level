import { Component, OnInit } from '@angular/core';

import{ ProductInfoService} from '../product-info.service';
import {Product} from '../product';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  carsProducts:Product[]=[];
  totalValue:number=0;
  count:number=0;
  constructor(
    private ProductInfoService: ProductInfoService,
    
  ) {}

  ngOnInit():void {
    this.getCarsProducts();
    
  }
  getCarsProducts():void{
    this.carsProducts=this.ProductInfoService.getCarsProducts();
    this.calcCl();
    
      }
    
 deleteFc(product:Product){
   this.ProductInfoService.deleteFc(product);
   this.calcCl();
   
 }
   

calcCl(){
  const products = this.ProductInfoService.getCarsProducts()
  this.totalValue = 0;
  this.count = 0;
  this.carsProducts=products;
  products.forEach((product) => {
    this.totalValue += product.price;
    this.count+=product.quantity;
  });
}
 

}

  
   

  
  
 

