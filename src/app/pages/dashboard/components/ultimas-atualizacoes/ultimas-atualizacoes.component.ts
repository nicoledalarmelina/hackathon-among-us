import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { ObterUltimosRegistrosResponse } from '../../../../core/responses/dashboard/obter-ultimos-registros.response';
import { DashboardService } from '../../../../services/dashboard.service';
import { ToastService } from '../../../../shared/components/toast/toast.service';
import { Utility } from '../../../../core/common/utility';

@Component({
  selector: 'app-ultimas-atualizacoes',
  standalone: true,
  imports: [NgClass, DatePipe],
  templateUrl: './ultimas-atualizacoes.component.html',
  styleUrl: './ultimas-atualizacoes.component.scss'
})
export class UltimasAtualizacoesComponent implements OnInit {

  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  listaAtualizacao: ObterUltimosRegistrosResponse[] = [];
  groupedUpdates: any;
  utility = Utility;

  ngOnInit(): void {
    this.getFilesList();
  }

  groupUpdates() {
    this.groupedUpdates = Object.keys(this.listaAtualizacao.reduce((acc, update) => {
      (acc[update.dataConvertida] = acc[update.dataConvertida] || []).push(update);
      return acc;
    }, {} as { [key: string]: ObterUltimosRegistrosResponse[] }))
      .map(data => ({
        data: data,
        ufs: this.listaAtualizacao.filter(updt => updt.dataConvertida === data),
      }));
  }

  getFilesList() {
    this.dashboardService.obterUltimosRegistros().subscribe({
      next: (response) => {
        if (response) {
          this.listaAtualizacao = response;
        }
      },
      complete: () => {
        this.convertDate();
      },
      error: (error) => {
        this.toastService.showToast('error', error.message);
      }
    })
  }

  convertDate() {
    this.listaAtualizacao.forEach(u => {
      u.dataConvertida = u.dataArquivo.split('T')[0];
    });

    this.groupUpdates();
  }
}
