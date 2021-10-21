import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cart: any = [];
private mySubject = new Subject<any>();
ob = this.mySubject.asObservable();
  
  constructor() { 

  }

  serviceFn(value:any) {
    this.mySubject.next(value);
  }

  getCart(){
    return this.cart;
  }

  addProduct(produit: any){
 
    let newProduit = new Cart(produit);
    let added = false;
    for (let p of this.cart) {
      if (p.produit.id == produit.id) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      newProduit.setQuantity(1);
      this.cart.push(newProduit);
    }
    console.log(this.cart);
  }

  
  removeProduct(id: any,numberToRemove: number){
    let newProduit = new Cart(id);
    newProduit.setQuantity(1);
    this.cart.push(newProduit);
    console.log(this.cart);
  }

  

}
