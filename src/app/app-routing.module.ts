import { RouterModule, Routes } from "@angular/router";
import { PalavraChaveComponent } from "./features/regulatorio/palavra-chave/palavra-chave.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    path: 'palavra-chave',
    component: PalavraChaveComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }