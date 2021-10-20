import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
 
  restauData: any;
  constructor(private router: Router) { }

  ngOnInit() {
    fetch('./assets/json/Restaurant.json').then(res => res.json()).then(json => {
      this.restauData = json;
    })
  }

  onGoToSelectRestaurant(restau: any){
    let navigationExtras: NavigationExtras = {
      state: {
        produits:restau
      }
    };
    this.router.navigate(['/details-produit'],navigationExtras);
  }
}
 