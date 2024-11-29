import { Component, OnInit } from '@angular/core';
import { PalavraChaveGrafico } from '../../../../core/models/dashboard/palavra-chave-grafico.model';
import { CommonModule, NgClass } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-grafico-palavras-chave',
  standalone: true,
  imports: [CommonModule, NgClass, MatTooltipModule],
  templateUrl: './grafico-palavras-chave.component.html',
  styleUrl: './grafico-palavras-chave.component.scss'
})
export class GraficoPalavrasChaveComponent implements OnInit {

  listaPalavras: PalavraChaveGrafico[] = [
    <PalavraChaveGrafico>{ palavra: 'Detran', total: 350 },
    <PalavraChaveGrafico>{ palavra: 'financiamento', total: 300 },
    <PalavraChaveGrafico>{ palavra: 'veículo', total: 250 },
    <PalavraChaveGrafico>{ palavra: 'transferência digital de veículo', total: 200 },
    <PalavraChaveGrafico>{ palavra: 'recuperação extrajudicial de veículo', total: 150 },
  ];

  width100: number;

  ngOnInit(): void {
    this.width100 = this.listaPalavras[0].total;
  }

  calcWidth(total: number): number {
    if (total == this.width100) return 100;

    return (total * 100) / this.width100;
  }

}
