import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  
  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  // ActivatedRoute > captura parâmetros da URL
  constructor(private _produtoService: ProdutoService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }

  ngOnInit(): void {
    this.listarProduto();
}

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        this.produto = new Produto(res[0].id, res[0].produto, res[0].descricao, res[0].foto, res[0].preco);
      }
    );
  }

  atualizar(id: number){
    this._produtoService.atualizaProduto(id, this.produto).subscribe(
      produto => {this.produto = new Produto(0, "", "", "", 0)},
      err => {alert("Erro ao atualizar produto!")}
    );

    this._router.navigate(["restrito/lista"])
  }

}
