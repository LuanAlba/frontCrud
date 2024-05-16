import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "produtos", component: ProdutosComponent
  } 

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
