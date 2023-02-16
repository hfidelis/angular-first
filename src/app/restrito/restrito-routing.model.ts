import { RouterModule, Routes } from "@angular/router";
import { RestritoComponent } from "./restrito.component";
import { ProdutoCadastroComponent } from "./produto-cadastro/produto-cadastro.component";
import { ProdutoReadComponent } from "./produto-read/produto-read.component";
import { ProdutoUpdateComponent } from "./produto-update/produto-update.component";
import { NgModule } from "@angular/core";
import { GuardGuard } from "../guard.guard";

const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: ProdutoCadastroComponent, canActivate: [GuardGuard] },
            { path: 'lista', component: ProdutoReadComponent, canActivate: [GuardGuard] },
            { path: 'editar/:id', component: ProdutoUpdateComponent, canActivate: [GuardGuard] }
        ]
    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})

export class RestritoRoutingModule {

}