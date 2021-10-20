import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit {

details: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state.produits;
      }
    });
  }

  ngOnInit() {
  }

}
