import { Component, OnInit, Input,
  OnChanges,
  SimpleChange,
  SimpleChanges } from '@angular/core';
  import{ ProductInfoService} from '../product-info.service';
  import {Product} from '../product';
  
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit,OnChanges{
  
  @Input() products: Product[];
  totalCn = 0;
	totalValue = 0;
	constructor() {}

	ngOnChanges(changes: SimpleChanges) {
		const productsChanges: SimpleChange = changes.products;

		const products: Product[] = productsChanges.currentValue;
    this.totalValue = 0;
    this.totalCn=0;
		products.forEach((product) => {
      this.totalValue += product.price;
      this.totalCn+=product.quantity;
		});
	}

	ngOnInit() {}
}
