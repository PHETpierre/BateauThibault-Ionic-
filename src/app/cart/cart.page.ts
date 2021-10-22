import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActionSheetController, AlertController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;
  total: any;
  popUp: any;

  constructor(private router: Router,
    private alertController: AlertController,
    private cartService: CartService,
    public actionSheetController: ActionSheetController,
    ) {}

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

validCart(){
  this.clearCart();
  this.router.navigate(['/home']);
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

  changeQuantity(event: string,produit: any){
    if(event === "-1" ){
      this.cartService.removeOneProduct(produit)
    }
    else if (event === "+1" ){
        this.cartService.addProduct(produit);
    }

    else{
      this.cartService.setQuantity(produit,event)
    }
  }

  async quantityActionSheet(produit: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sélectionnez la quantité',
      cssClass: 'my-custom-class',
      buttons: [{
        text: '1',
        handler: () => {
          this.changeQuantity("1",produit);
        }
      }, {
        text: '2',
        handler: () => {
          this.changeQuantity("2",produit);
        }
      },
      {
        text: '3',
        handler: () => {
          this.changeQuantity("3",produit);
        }
      },
      {
        text: '4',
        handler: () => {
          this.changeQuantity("4",produit);
        }
      },
      {
        text: '5',
        handler: () => {
          this.changeQuantity("5",produit);
        }
      },
       {
        text: 'Ajouter 1',
        handler: () => {
          this.changeQuantity("+1",produit);
        }
      },
      {
        text: 'Enlever 1',
        role: 'destructive',
        handler: () => {
          this.changeQuantity("-1",produit);
        }
      },
      {
        text: 'Enlever du Panier',
        role: 'destructive',
        handler: () => {
          this.cartService.removeFromCart(produit);
        }
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async showAlert() {
    let alert = await this.alertController.create({
      header: 'Envoyer votre commande ?',
      subHeader: 'Envoyer votre comande de '+this.printTotal()+'€ à Thibault ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'OK',
          handler: () => {
            this.validCart();
          }
        }
      ],
      
    });

    await alert.present();
  }
}
