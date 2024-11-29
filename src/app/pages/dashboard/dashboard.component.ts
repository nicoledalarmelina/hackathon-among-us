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

  slidePositon: number = 0;
  widthDoc: number = 18;
  index: number = 0;
  totalIndexes: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.countDocs();
  }

  clickRightArrow() {
    this.router.navigate(['documentos-recuperados']);
  }

  countDocs() {
    let count = this.listaDocumentos.length;
    this.totalIndexes = Math.ceil(count / 5);
  }
}
