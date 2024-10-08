import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { AtualizarProdutoComponent } from './components/produto/atualizar-produto/atualizar-produto.component';
import { ExcluirProdutoComponent } from './components/produto/excluir-produto/excluir-produto.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "produtos", component: ProdutosComponent
  },
  {
    path: "produtos/criar", component: CriarProdutoComponent
  },
  {
    //passando o parâmetro id do produto que será atualizado
    path: "produtos/atualizar/:id", component: AtualizarProdutoComponent
  },
  {
    path: "produtos/deletar/:id", component: ExcluirProdutoComponent
  }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
