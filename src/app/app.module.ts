import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProdutosComponent } from './components/views/produtos/produtos.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { ObterProdutoComponent } from './components/produto/obter-produto/obter-produto.component';
import { ObterProduto2Component } from './components/produto/obter-produto2/obter-produto2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AtualizarProdutoComponent } from './components/produto/atualizar-produto/atualizar-produto.component';
import { ExcluirProdutoComponent } from './components/produto/excluir-produto/excluir-produto.component';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    CriarProdutoComponent,
    ObterProdutoComponent,
    ObterProduto2Component,
    AtualizarProdutoComponent,
    ExcluirProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],

  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
