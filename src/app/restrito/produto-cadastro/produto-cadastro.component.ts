import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent {

  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router) {}

  cadastrar(): void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0, "", "", "", 0);
        alert("Cadastro efetuado com sucesso!");
      },
      err => {alert("Erro ao cadastrar produto!");}
    );
    
      this._router.navigate(["restrito/lista"])

  }

}
