import { RouterModule, Routes } from "@angular/router";
import { PalavraChaveComponent } from "./pages/palavra-chave/palavra-chave.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DocumentosRecuperadosComponent } from "./pages/documentos-recuperados/documentos-recuperados.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'palavra-chave',
    component: PalavraChaveComponent
  },
  {
    path: 'documentos-recuperados',
    component: DocumentosRecuperadosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }