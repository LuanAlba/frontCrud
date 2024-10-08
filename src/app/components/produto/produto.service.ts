import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

import { Produto } from './produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:3000/produtos"

  constructor(
      private snackBar: MatSnackBar,
      private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto)
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  readById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`)
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${produto.id}`, produto)
  }

  delete(id: string): Observable<Produto> {
    return this.http.delete<Produto>(`${this.baseUrl}/${id}`)
  }

}
