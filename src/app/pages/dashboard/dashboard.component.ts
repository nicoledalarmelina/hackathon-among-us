import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { ListaDocumentosRecuperados } from '../../core/models/dashboard/lista-documentos-recuperados.model';
import { CommonModule } from '@angular/common';
import { DocumentoRecuperado } from '../../core/models/dashboard/documento-recuperado.model';
import { TipoDocumento } from '../../core/enums/tipoDocumento.enum';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';
import { ListagemDocsUfComponent } from './components/listagem-docs-uf/listagem-docs-uf.component';
import { GraficoPalavrasChaveComponent } from './components/grafico-palavras-chave/grafico-palavras-chave.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { UltimasAtualizacoesComponent } from './components/ultimas-atualizacoes/ultimas-atualizacoes.component';
import { DashboardService } from '../../services/dashboard.service';
import { ToastService } from '../../shared/components/toast/toast.service';
import { ArquivoRecuperado } from '../../core/models/dashboard/arquivo-recuperado.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    BreadcrumbComponent,
    FileCardComponent,
    ListagemDocsUfComponent,
    GraficoPalavrasChaveComponent,
    UltimasAtualizacoesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  listaDocumentos: ArquivoRecuperado[] = [];

  slidePositon: number = 0;
  widthDoc: number = 18;
  index: number = 0;
  totalIndexes: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.countDocs();
    this.getFilesList();
  }

  clickRightArrow() {
    this.router.navigate(['documentos-recuperados']);
  }

  countDocs() {
    let count = this.listaDocumentos.length;
    this.totalIndexes = Math.ceil(count / 5);
  }

  getFilesList() {
    this.dashboardService.obterArquivos(0, 3).subscribe({
      next: (response) => {
        if (response.listaArquivoProcessado) {
          this.listaDocumentos = response.listaArquivoProcessado;
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }
}
