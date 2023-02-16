import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from 'src/app/models/produto.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router, private _loginService: LoginService) {}

  ngOnInit(): void {
      this.listarProdutos();
      this._loginService.setMostraMenu(false);
  }
  
  // listarProdutos() retorna todos os itens retornados pelo método POST na api, adicionando-os no array produtos da classe ProdutoReadComponent.
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

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
       err => {alert('Erro ao excluir produto!')}
    );
  
      this._router.navigate(["/restrito/lista"]);

  }

}
