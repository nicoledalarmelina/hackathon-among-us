import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PalavraChave } from '../../core/models/palavra-chave/palavra-chave.model';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { KeywordDialogComponent } from '../../shared/components/keyword-dialog/keyword-dialog.component';
import { PalavraChaveService } from '../../services/palavra-chave.service';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { ToastService } from '../../shared/components/toast/toast.service';
import { CriarPalavraChaveRequest } from '../../core/requests/palavra-chave/criar-palavra-chave.request';
import { CustomPaginatorIntl } from '../../services/custom-paginator.service';

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
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }],
  templateUrl: './palavra-chave.component.html',
  styleUrl: './palavra-chave.component.scss'
})

export class PalavraChaveComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  private toastService = inject(ToastService);
  private palavraChaveService = inject(PalavraChaveService);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listaPalavras: PalavraChave[] = [];
  displayedColumns: string[] = ['palavra', 'criadaPor', 'criadaEm', 'acao'];
  dataSource = new MatTableDataSource<PalavraChave>(this.listaPalavras);

  ngOnInit(): void {
    this.getKeyrowdsList();
  }

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
          this.dataSource.data = this.listaPalavras;
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
        if (response) {
          this.toastService.showToast('success', 'Palavra-chave excluída com sucesso!');
        }
      },
      complete: () => {
        this.getKeyrowdsList();
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

  addKeyword(keyword: string) {
    let request = <CriarPalavraChaveRequest>{
      palavra: keyword,
      criadaPor: 'Usuário Among us'
    };

    this.palavraChaveService.criarPalavraChave(request).subscribe({
      next: (response) => {
        if (response) {
          this.toastService.showToast('success', 'Palavra-chave incluída com sucesso!');
        }
      },
      complete: () => {
        this.getKeyrowdsList();
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

}
