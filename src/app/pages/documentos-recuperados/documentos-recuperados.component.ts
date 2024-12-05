import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { DocumentosAgrupados } from '../../core/models/documentos-recuperados/documentos-agrupados.model';
import { ArquivoRecuperado } from '../../core/models/dashboard/arquivo-recuperado.model';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '../../shared/components/toast/toast.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DocsFilterDialogComponent } from '../../shared/components/docs-filter-dialog/docs-filter-dialog.component';
import { DocumentosRecuperadosFiltro } from '../../core/models/documentos-recuperados/documentos-recuperados-filtro.model';

@Component({
  selector: 'app-documentos-recuperados',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    CdkAccordionModule,
    BreadcrumbComponent,
    FileCardComponent,
    MatButtonModule
  ],
  providers: [DatePipe],
  templateUrl: './documentos-recuperados.component.html',
  styleUrl: './documentos-recuperados.component.scss'
})
export class DocumentosRecuperadosComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  groupedDocs: DocumentosAgrupados[];
  listaDocumentos: ArquivoRecuperado[] = [];
  documentosFiltrados: ArquivoRecuperado[] = this.listaDocumentos;
  pageIndex: number = 0;
  pageSize: number = 10;
  filterValue: DocumentosRecuperadosFiltro | null;
  loading: boolean = true;

  constructor(private dialog: MatDialog) { }

  private datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.getFilesList();
  }

  openDialog() {
    let dialogRef = this.dialog.open(DocsFilterDialogComponent, {
      panelClass: ['animate__animated', 'animate__slideInRight', 'docs-filter'],
      height: '400px',
      width: '300px',
      position: {
        top: '0px',
        right: '0px'
      },
      data: this.filterValue
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.filterValue = <DocumentosRecuperadosFiltro>{
          estado: value.estado,
          dataInicial: value.dataInicial,
          dataFinal: value.dataFinal,
          relevante: value.relevante
        };
      }

      if (value == null) {
        this.filterValue = null;
      }

      this.getFilesList();
    });
  }

  loadMore() {
    this.getFilesList(this.pageIndex, this.pageSize + 10);
  }

  onScroll() {
    if (this.documentosFiltrados.length == 0) return;

    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - 2;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
      this.loadMore();
    }
  }

  getFilesList(pageIndex: number = 0, pageSize: number = 10) {
    this.loading = true;
    let filter: DocumentosRecuperadosFiltro | null = null;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;

    if (this.filterValue) {
      filter = <DocumentosRecuperadosFiltro>{
        estado: this.filterValue.estado,
        dataInicial: this.datePipe.transform(this.filterValue.dataInicial, 'yyyy/MM/dd'),
        dataFinal: this.datePipe.transform(this.filterValue.dataFinal, 'yyyy/MM/dd'),
        relevante: this.filterValue.relevante
      };
    }

    this.dashboardService.obterArquivos(pageIndex, pageSize, filter).subscribe({
      next: (response) => {
        if (response.listaArquivoProcessado) {
          this.listaDocumentos = response.listaArquivoProcessado;
          this.documentosFiltrados = [...this.listaDocumentos];
          this.loading = false;
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
        this.loading = false;
      }
    })
  }
}
