import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { ToastService } from '../../../../shared/components/toast/toast.service';
import { ObterEstatisticasResponse } from '../../../../core/responses/dashboard/obter-dados-documentos-recuperados.response';
import { DetalhesEstatistica } from '../../../../core/models/dashboard/documento-recuperado-grafico.model';

@Component({
  selector: 'app-listagem-docs-uf',
  standalone: true,
  imports: [],
  templateUrl: './listagem-docs-uf.component.html',
  styleUrl: './listagem-docs-uf.component.scss'
})
export class ListagemDocsUfComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  estatistica: ObterEstatisticasResponse;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dashboardService.obterEstatisticas().subscribe({
      next: (response) => {
        this.estatistica = response;
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }
}
