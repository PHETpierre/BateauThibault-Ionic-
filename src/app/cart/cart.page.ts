import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AlertController, NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;
  total: any;
  alert: any;
  constructor(private alertController: AlertController,private cartService: CartService) {}

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

printTotal(){
  return this.cartService.getTotalCart();
}

  printPrice(produit: any){
    let quantite = produit.quantity;
    let prix = produit.produit.price;
  let prixFinal = this.cartService.prixProduit(produit);
  
  return quantite+'x'+prix+'€='+prixFinal+'€';

  }

  clearCart(){
    this.cartService.clearCart();
    this.cart = this.cartService.cart;
  }

  removeElement(produit: any){
      this.cartService.removeAProduct(produit);
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


  async showAlert() {
    let alert = await this.alertController.create({
      header: 'Envoyer votre commande ?',
      subHeader: 'Envoyer votre comande de '+this.printTotal()+'€ à Thibault ?',
      buttons: ['Annuler','OK']
    });

    await alert.present();
  }






}
