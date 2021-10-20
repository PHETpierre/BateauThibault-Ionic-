import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauPageRoutingModule } from './bateau-routing.module';

import { BateauPage } from './bateau.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauPageRoutingModule
  ],
  declarations: [BateauPage,HeaderComponent]
})
export class BateauPageModule {}
