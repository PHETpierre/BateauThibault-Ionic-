import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  produitsData: any;
  poissons= [];
  crustaces = [];
  coquillages = [];
  promotions = [];

  constructor(private router: Router) { }

  ngOnInit() {
    fetch('../assets/json/Produits.json').then(res => res.json()).then(json => {
      this.produitsData = json;
      this.produitsData.map((produits) => {
        this.InitProducts(produits);
      });
    })
  }

  InitProducts(produits: any){
    if (produits.category == 0){

      this.poissons.push(produits);

    }
    else if (produits.category == 1){
      this.coquillages.push(produits);

    }
    else {
      this.crustaces.push(produits);
    }
    if (produits.discount == 5 ){
      this.promotions.push(produits);
    }
  }

  onGoToSelectProducts(produit: any){
    let produits: any;
    if (produit==="poissons"){
      produits = this.poissons;
    }
    else if (produit==="coquillages"){
      produits = this.coquillages;      
    }
    else if (produit==="crustaces"){
      produits = this.crustaces;
    }
    else if (produit==="promotions"){
      produits = this.promotions;
    }
      let navigationExtras: NavigationExtras = {
        state: {
          produits:produits
        }
      };
      this.router.navigate(['/produit-selection'],navigationExtras);
    }


}
