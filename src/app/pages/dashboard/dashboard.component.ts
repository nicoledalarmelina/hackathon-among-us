import { Component } from '@angular/core';
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
import { EstadosGrafico } from '../../core/models/dashboard/estados-grafico.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    BreadcrumbComponent,
    FileCardComponent,
    ListagemDocsUfComponent,
    GraficoPalavrasChaveComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listaDocumentos: DocumentoRecuperado[] = [
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      uf: 'SP',
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      uf: 'PR',
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      uf: 'MG',
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
  ];

  listaAtualizacao: EstadosGrafico[] = [
    <EstadosGrafico>{ data: '29/11/2024', estado: 'MG' },
    <EstadosGrafico>{ data: '29/11/2024', estado: 'SP' },
    <EstadosGrafico>{ data: '15/11/2024', estado: 'PR' }
  ]

  slidePositon: number = 0;
  widthDoc: number = 18;
  index: number = 0;
  totalIndexes: number = 0;

  groupedUpdates: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.countDocs();
    this.groupUpdates();
  }

  clickRightArrow() {
    this.router.navigate(['documentos-recuperados']);
  }

  countDocs() {
    let count = this.listaDocumentos.length;
    this.totalIndexes = Math.ceil(count / 5);
  }

  groupUpdates() {
    this.groupedUpdates = Object.keys(this.listaAtualizacao.reduce((acc, update) => {
      (acc[update.data] = acc[update.data] || []).push(update);
      return acc;
    }, {} as { [key: string]: EstadosGrafico[] }))
      .map(data => ({
        data: data,
        ufs: this.listaAtualizacao.filter(updt => updt.data === data).map(updt => updt.estado)
      }));

      console.log(this.groupedUpdates)
  }
}
