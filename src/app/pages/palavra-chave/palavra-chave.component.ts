import { Component, inject, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PalavraChave } from '../../core/models/palavra-chave/palavra-chave.model';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { KeywordDialogComponent } from '../../shared/components/keyword-dialog/keyword-dialog.component';
import { PalavraChaveService } from '../../services/palavra-chave.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { ToastService } from '../../shared/components/toast/toast.service';
import { CriarPalavraChaveRequest } from '../../core/requests/palavra-chave/criar-palavra-chave.request';

@Component({
  selector: 'app-palavra-chave',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    DatePipe,
    MatMenuModule,
    MatButtonModule,
    BreadcrumbComponent,
    ToastComponent
  ],
  templateUrl: './palavra-chave.component.html',
  styleUrl: './palavra-chave.component.scss'
})

export class PalavraChaveComponent {

  constructor(private dialog: MatDialog) { }

  private toastService = inject(ToastService);
  private palavraChaveService = inject(PalavraChaveService);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listaPalavras: PalavraChave[] = [
    <PalavraChave>{ id: 1, palavra: 'Detran', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ id: 2, palavra: 'departamento estadual de trânsito', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ id: 3, palavra: 'Unidade Fiscal de Referência', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ id: 4, palavra: 'UFR', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'Unidade Padrão Fiscal', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'UPF', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'Diretoria', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'diretor', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'presidente', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'Tecnobank', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'financiamento', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'contrato (s) de financiamento', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'veículo', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'automóvel', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'automóveis', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'credenciamento', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'registradora (s)', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'Detran', criadaPor: 'Among us', criadaEm: new Date },
  ];

  displayedColumns: string[] = ['palavra', 'criadaPor', 'criadaEm', 'acao'];
  dataSource = new MatTableDataSource<PalavraChave>(this.listaPalavras);;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    let dialogRef = this.dialog.open(KeywordDialogComponent, {
      height: '244px',
      width: '666px',
    });

    dialogRef.afterClosed().subscribe(keyword => {
      if (keyword) {
        this.addKeyword(keyword);
      }
    });
  }

  getKeyrowdsList() {
    this.palavraChaveService.obterPalavrasChave().subscribe({
      next: (response) => {
        if (response.listaPalavras) {
          this.listaPalavras = response.listaPalavras;
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

  deleteKeyword(id: number) {
    this.palavraChaveService.excluirPalavraChave(id).subscribe({
      next: (response) => {
        if (response.id) {
          this.toastService.showToast('success', 'Palavra - chave excluída com sucesso!');
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

  addKeyword(keyword: string) {
    let request = <CriarPalavraChaveRequest>{
      palavra: keyword,
      criadoPor: 'Usuário Among us'
    };

    this.palavraChaveService.criarPalavraChave(request).subscribe({
      next: (response) => {
        if (response.id) {
          this.toastService.showToast('success', 'Palavra-chave incluída com sucesso!');
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

}
