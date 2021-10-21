import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  printCart(){
    console.log(this.cart);
  }

quantityNumber(number: number){
  let numberList = [];
  for (let i = 0; i < number; i++) {
    numberList.push(i);
  }
  return numberList;
}

  printPrice(produit: any){
  return this.cartService.prixProduit(produit);
  }

  changeQuantity($event,produit: any){
    if($event.detail.value === "-1" ){
      this.cartService.removeOneProduct(produit)
    }
    else if ($event.detail.value === "+1" ){
        this.cartService.addProduct(produit);
    }

    else{
      this.cartService.setQuantity(produit,$event.detail.value)
    }
    console.log($event);
  }


}
