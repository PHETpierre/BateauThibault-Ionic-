import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cart: any = [];
  
  constructor() {}

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

  addProduct(produit: any){
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


  removeAProduct(produit: any){
    for (let p of this.cart) {
      if (p.produit.id == produit.id) {
        let del = this.cart.indexOf(p);
        console.log(del);

        break;
      }
    } 
  }

  clearCart(){
    this.cart = [];
  }



removeFromCart(produit: any){
  let index = this.cart.findIndex(obj => obj.id == produit.id );
    this.cart.splice(index, 1);
}

  removeOneProduct(produit: any){
    for (let p of this.cart) {
      if (p.produit.id == produit.id) {
        if(p.quantity > 0 ){ 
          let quan =  parseInt(p.quantity) -  1;
          p.quantity = quan;
        }
        else{

        }
        break;
      }
    } 
  }

  prixProduit(produit: any){
    let quantite = produit.quantity;
    let prix = produit.produit.price;
    let prixFinal = quantite*prix;
    return prixFinal;
  }

  getTotalCart(){
    let total = 0;
    for (let p of this.cart) {
      total += this.prixProduit(p);
    }
return total;
  }

}
