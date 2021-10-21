import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cart: any = [];
  
  constructor() {
}

setQuantity(produit: any,newQuantity: any){
  for (let p of this.cart) {
    if (p.produit.id == produit.id) {
      p.quantity = newQuantity;
      break;
    }
  }  
}

  getCart(){
    return this.cart;
  }

  prixProduit(produit: any){
    let quantite = produit.quantity;
    let prix = produit.produit.price;
    let prixFinal = quantite*prix;
    return quantite+'x'+prix+'€='+prixFinal+'€';
  }

  addProduct(produit: any){
    console.log(produit); 
    let added = false;
    for (let p of this.cart) {
      if (p.produit.id == produit.id) {
      let quan =  parseInt(p.quantity) +  1;
        p.quantity = quan;
        added = true;
        break;
      }
    }
    if (!added) {
      let newProduit = new Cart(produit);
      newProduit.setQuantity(1);
      this.cart.push(newProduit);
    }
  }

  
  removeOneProduct(produit: any){
    for (let p of this.cart) {
      if (p.produit.id == produit.id) {
        let quan =  parseInt(p.quantity) -  1;
        p.quantity = quan;
        break;
      }
    }  
  }

  

}
