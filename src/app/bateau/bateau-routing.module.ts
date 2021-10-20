import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauPage } from './bateau.page';

const routes: Routes = [
  {
    path: '',
    component: BateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauPageRoutingModule {}
