import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { DocumentoRecuperado } from '../../core/models/dashboard/documento-recuperado.model';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';

@Component({
  selector: 'app-documentos-recuperados',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FileCardComponent
  ],
  templateUrl: './documentos-recuperados.component.html',
  styleUrl: './documentos-recuperados.component.scss'
})
export class DocumentosRecuperadosComponent {
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
    <DocumentoRecuperado>{
      titulo: "Resolução 217/22",
      uf: 'MG',
      resumo: "A instituição financeira seleciona uma empresa credenciada que realiza o registro de contrato pelo Detran.",
      vigencia: new Date(),
      base64: ""
    },
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
}
