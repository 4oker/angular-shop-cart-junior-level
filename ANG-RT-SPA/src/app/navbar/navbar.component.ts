import { Component, OnInit } from '@angular/core';

import {Product} from '../product';
import {ProductInfoService} from '../product-info.service';
import {Car} from '../car';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private ProductInfoService:ProductInfoService) { }
 
  ngOnInit() {
  }

}
