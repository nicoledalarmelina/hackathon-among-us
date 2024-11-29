import { Component } from '@angular/core';
import { ListagemDocsUF } from '../../../../core/models/dashboard/listagem-docs-uf.model';
import { ListaDocumentosRecuperados } from '../../../../core/models/dashboard/lista-documentos-recuperados.model';

@Component({
  selector: 'app-listagem-docs-uf',
  standalone: true,
  imports: [],
  templateUrl: './listagem-docs-uf.component.html',
  styleUrl: './listagem-docs-uf.component.scss'
})
export class ListagemDocsUfComponent {
  listaDocsUf: ListagemDocsUF = <ListagemDocsUF>{
    total: 6110,
    listaDocumentos: [
      <ListaDocumentosRecuperados>{ uf: 'MG', palavraChave: 'Detran', total: 6 },
      <ListaDocumentosRecuperados>{ uf: 'PR', palavraChave: 'financiamento', total: 6 },
      <ListaDocumentosRecuperados>{ uf: 'SP', palavraChave: 'veículo', total: 6 },
    ]
  }
}
