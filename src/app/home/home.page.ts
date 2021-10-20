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
      lien: "bateau"
    },
    {
    name: "Restaurants",
    lien: "restaurants"
    },
    {
      name:"Recettes",
      lien :"recettes"
    },
    {
      name: "Contact",
      lien: "contact"
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
