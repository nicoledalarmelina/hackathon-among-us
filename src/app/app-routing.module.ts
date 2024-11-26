import { RouterModule, Routes } from "@angular/router";
import { PalavraChaveComponent } from "./features/regulatorio/palavra-chave/palavra-chave.component";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./features/regulatorio/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
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