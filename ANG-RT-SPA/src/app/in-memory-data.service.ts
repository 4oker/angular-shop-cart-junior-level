import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
 const products=[
    {id: 1, name: "Holodilnik", quantity:1, price:6 },
    {id: 2, name: "Computer", quantity:1, price:9},
    {id: 3, name: "Computer", quantity:1, price:2},
    {id: 4, name: "Computer", quantity:1, price:1},
    {id: 5, name: "Holodilnik", quantity:1, price:4},
    {id: 6, name: "Holodilnik", quantity:1, price:5}
  ];
  const cars=[];
  return{products,cars};
    }}