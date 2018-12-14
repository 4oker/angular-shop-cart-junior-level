import { Component, OnInit } from '@angular/core';

import {Product} from '../product';
import {ProductInfoService} from '../services/product-info.service';

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
