import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitSelectionPage } from './produit-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitSelectionPageRoutingModule {}
