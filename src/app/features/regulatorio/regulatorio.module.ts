import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PalavraChaveComponent } from './palavra-chave/palavra-chave.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PalavraChaveComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ]
})
export class RegulatorioModule { }
