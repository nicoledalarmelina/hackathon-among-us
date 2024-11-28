import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PalavraChaveService } from './services/palavra-chave.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatTableModule,
    HttpClient
  ],
  providers: [
    DatePipe,
    PalavraChaveService,
    provideHttpClient()
  ]
})
export class AppModule { }
