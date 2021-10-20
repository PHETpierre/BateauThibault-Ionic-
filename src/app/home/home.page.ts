import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lienList = [
    {
      name: "Bateaux",
      lien: "bateau",
      icon: "../assets/images/ancre.png",
    },
    {
    name: "Restaurants",
    lien: "restaurants",
    icon: "../assets/images/restaurant.png",

    },
    {
      name:"Recettes",
      lien :"recettes",
      icon: "../assets/images/recette.png",
    },
    {
      name: "Contact",
      lien: "contact",
      icon: "../assets/images/tourteau.png",
      }
  ];

  constructor(private router: Router) { }

  onGoToSelectCategory(cat: string){
    let navigationExtras: NavigationExtras = {
      state: {
        cat:cat
      }
    };
    this.router.navigate(['/'+cat],navigationExtras);
  }

}
