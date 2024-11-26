import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { RegulatorioModule } from './features/regulatorio/regulatorio.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RegulatorioModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AppModule { }
