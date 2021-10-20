import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProduitPageRoutingModule } from './details-produit-routing.module';

import { DetailsProduitPage } from './details-produit.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProduitPageRoutingModule
  ],
  declarations: [DetailsProduitPage,HeaderComponent]
})
export class DetailsProduitPageModule {}
