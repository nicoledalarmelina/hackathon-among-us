import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { DocumentoRecuperado } from '../../core/models/dashboard/documento-recuperado.model';
import { FileCardComponent } from '../../shared/components/file-card/file-card.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, NgClass } from '@angular/common';
import { DocumentosAgrupados } from '../../core/models/documentos-recuperados/documentos-agrupados.model';

@Component({
  selector: 'app-documentos-recuperados',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    CdkAccordionModule,
    BreadcrumbComponent,
    FileCardComponent
  ],
  templateUrl: './documentos-recuperados.component.html',
  styleUrl: './documentos-recuperados.component.scss'
})
export class DocumentosRecuperadosComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  groupedDocs: DocumentosAgrupados[];


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

  ngOnInit(): void {
    this.groupDocsByUF()
  }

  groupDocsByUF() {
    this.groupedDocs = Object.keys(this.listaDocumentos.reduce((acc, document) => {
      (acc[document.uf] = acc[document.uf] || []).push(document);
      return acc;
    }, {} as { [key: string]: DocumentoRecuperado[] }))
      .map(uf => ({
        uf: uf,
        listaDocumentos: this.listaDocumentos.filter(doc => doc.uf === uf)
      }));

    this.groupedDocs.sort((a, b) => {
      if (a.uf < b.uf) return -1;
      else if (a.uf > b.uf) return 1;
      else return 0;
    });
  }

}
