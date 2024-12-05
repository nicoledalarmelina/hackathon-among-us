import { Component, inject, OnInit } from '@angular/core';
import { PalavraChaveGrafico } from '../../../../core/models/dashboard/palavra-chave-grafico.model';
import { CommonModule, NgClass } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardService } from '../../../../services/dashboard.service';
import { ToastService } from '../../../../shared/components/toast/toast.service';

@Component({
  selector: 'app-grafico-palavras-chave',
  standalone: true,
  imports: [CommonModule, NgClass, MatTooltipModule],
  templateUrl: './grafico-palavras-chave.component.html',
  styleUrl: './grafico-palavras-chave.component.scss'
})
export class GraficoPalavrasChaveComponent implements OnInit {

  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  listaPalavras: PalavraChaveGrafico[] = [];
  width100: number;

  ngOnInit(): void {
    this.getKeywordChart();
  }

  calcWidth(total: number): number {
    if (total == this.width100) return 100;

    return (total * 100) / this.width100;
  }

  getTooltip(palavra: PalavraChaveGrafico) {
    return `${palavra.quantidade} documento${palavra.quantidade > 1 ? 's' : ''} recuperado${palavra.quantidade > 1 ? 's' : ''} utilizando essa palavra-chave`;
  }

  getKeywordChart() {
    this.dashboardService.obterGraficoPalavraChave().subscribe({
      next: (response) => {
        if (response.listaPalavras) {
          this.listaPalavras = response.listaPalavras;
          this.width100 = this.listaPalavras[0].quantidade;
        }
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

}
