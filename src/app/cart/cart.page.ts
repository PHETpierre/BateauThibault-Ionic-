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
    this.cartService.ob.subscribe((result) => {
      this.foo(result);
    }
  );  }

  getCart(){
    console.log(this.cartService.cart);
    this.cart = this.cartService.cart;
  }

  foo(result:any)
  {
    //access result here
  }
}
