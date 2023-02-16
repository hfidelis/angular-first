import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

// interface OnInit > when load, exec methods on ngOnInit()

export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) {}

  ngOnInit(): void {
      this.listarProdutos();
  }
// listarProdutos() retorna todos os itens retornados pelo método POST na api, adicionando-os no array produtos da classe InicioComponent.
  listarProdutos(): void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(item.id, item.produto, item.descricao, item.foto, item.preco);
          }
        )
      }
    ) 

  }

}
