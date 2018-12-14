import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {ProductInfoService} from '../product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  
	product:Product;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ProductInfoService: ProductInfoService
  ) {}
    
    ngOnInit():void{
      this.route.params.forEach(param => {
        let id = parseInt(param['id'])
        this.ProductInfoService.getProduct(id)
            .subscribe(product => this.product = product)
    })
    }
   
    
    
    goBack(): void {
      this.location.back();
    }

    addFc(product:Product){
      this.ProductInfoService.addFc(product);
      
     }

}