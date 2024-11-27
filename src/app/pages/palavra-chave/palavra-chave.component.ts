import { Component, ViewChild } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PalavraChave } from '../../core/models/palavra-chave.model';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-palavra-chave',
  standalone: true,
  imports: [BreadcrumbComponent, MatTableModule, MatPaginatorModule, DatePipe, MatMenuModule],
  templateUrl: './palavra-chave.component.html',
  styleUrl: './palavra-chave.component.scss'
})

export class PalavraChaveComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listaPalavras: PalavraChave[] = [
    <PalavraChave>{ palavra: 'Detran', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'departamento estadual de trânsito', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'Unidade Fiscal de Referência', criadaPor: 'Among us', criadaEm: new Date },
    <PalavraChave>{ palavra: 'UFR', criadaPor: 'Among us', criadaEm: new Date },
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

}
