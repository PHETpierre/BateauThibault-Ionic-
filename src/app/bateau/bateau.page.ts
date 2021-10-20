import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {

  bateauData: any;
  constructor(private router: Router) { }

  ngOnInit() {
    fetch('./assets/json/Bateau.json').then(res => res.json()).then(json => {
      this.bateauData = json;
    })
  }

  onGoToSelectBateau(bateau: any){
    if(bateau.name === "Contact"){
      this.router.navigate(['/contact']);      
    }
    else{
    let navigationExtras: NavigationExtras = {
      state: {
        produits:bateau
      }
    };
    this.router.navigate(['/details-produit'],navigationExtras);
  }
}

}
