import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitSelectionPageRoutingModule } from './produit-selection-routing.module';

import { ProduitSelectionPage } from './produit-selection.page';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitSelectionPageRoutingModule
  ],
  declarations: [ProduitSelectionPage,HeaderComponent],
  providers: [CartService]
  
})
export class ProduitSelectionPageModule {}
