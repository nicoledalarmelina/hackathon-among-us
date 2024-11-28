import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { ListaDocumentosRecuperados } from '../../core/models/lista-documentos-recuperados.model';
import { CommonModule } from '@angular/common';
import { DocumentoRecuperado } from '../../core/models/documento-recuperado.model';
import { TipoDocumento } from '../../core/enums/tipoDocumento.enum';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    FileCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  listaDocumentosRecuperados: ListaDocumentosRecuperados[] = [
    // <ListaDocumentosRecuperados>{ uf: 'AC', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'AP', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'BA', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'MA', numeroRegistroContrato: 1, total: 6 },
    <ListaDocumentosRecuperados>{ uf: 'MG', palavraChave: 'Detran', total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'PB', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'PE', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'PI', numeroRegistroContrato: 1, total: 6 },
    <ListaDocumentosRecuperados>{ uf: 'PR', palavraChave: 'financiamento', total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'RJ', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'RR', numeroRegistroContrato: 1, total: 6 },
    // <ListaDocumentosRecuperados>{ uf: 'SC', numeroRegistroContrato: 1, total: 6 },
    <ListaDocumentosRecuperados>{ uf: 'SP', palavraChave: 'veículo', total: 6 },
  ];

  listaDocumentos: DocumentoRecuperado[] = [
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.instituicaoFinanceira,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroContrato,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroGarantia,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.instituicaoFinanceira,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroContrato,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroGarantia,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroContrato,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.instituicaoFinanceira,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroGarantia,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroContrato,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.instituicaoFinanceira,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroGarantia,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.registroContrato,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      tipoDocumento: TipoDocumento.instituicaoFinanceira,
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
  ];

  slidePositon: number = 0;
  widthDoc: number = 18;
  index: number = 0;
  totalIndexes: number = 0;

  ngOnInit() {
    this.countDocs();
  }

  clickRightArrow() {
    if (this.totalIndexes > this.index + 1) {
      this.slidePositon -= 91.5;
      this.index++;
    }

  }

  clickLeftArrow() {
    if (this.index > 0) {
      this.slidePositon += 91.5;
      this.index--;
    }
  }

  countDocs() {
    let count = this.listaDocumentos.length;
    this.totalIndexes = Math.ceil(count / 5);
  }
}
