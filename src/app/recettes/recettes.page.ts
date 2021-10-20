import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recetteData: any;
  constructor(private router: Router) { }

  ngOnInit() {
    fetch('./assets/json/Recettes.json').then(res => res.json()).then(json => {
      this.recetteData = json;
    })
  }

  onGoToSelectRecette(recette: any){
    let navigationExtras: NavigationExtras = {
      state: {
        produits:recette
      }
    };
    this.router.navigate(['/details-produit'],navigationExtras);
  }
}
