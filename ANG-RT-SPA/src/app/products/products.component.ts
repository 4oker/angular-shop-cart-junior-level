import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import {Product} from '../product';
import {ProductInfoService} from '../product-info.service';
import {Car} from '../car';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
 storeProducts:Product[];


  constructor(
    private ProductInfoService:ProductInfoService,
    
    ) { 
         }

  ngOnInit() {
    this.getProducts();
    
  }

  
  
  getProducts():void{
    this.ProductInfoService.getProducts()
    .subscribe(storeProducts=>this.storeProducts=storeProducts)
    
    }

    addFc(product:Product){
      this.ProductInfoService.addFc(product)
      
     }


     
      
    }
     
      
    
  

     
      
