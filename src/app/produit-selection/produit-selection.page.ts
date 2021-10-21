import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-produit-selection',
  templateUrl: './produit-selection.page.html',
  styleUrls: ['./produit-selection.page.scss'],
})
export class ProduitSelectionPage implements OnInit {

  details: any;
  cart: any;

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state.produits;
      }
    });
  }

  ngOnInit() {
   this.cart = this.cartService.getCart();
  }

  goBack(){
    this.router.navigate(['/store']);
  }


}
