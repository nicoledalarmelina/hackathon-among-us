import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';
import { ObterDadosUltimoMesGraficoBarraResponse } from '../core/responses/dashboard/obter-dados-ultimo-mes-grafico-barra.response';
import { ObterDadosPublicacoesUltimoMesResponse } from '../core/responses/dashboard/obter-dados-publicacoes-ultimo-mes.response';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  obterDadosUltimos30DiasGraficoBarra() {
    return this.http.get(`${environment.urlObterDadosUltimos30DiasGraficoBarra}`)
    .pipe(map(data => this.transformToObterDadosUltimoMesDiasGraficoBarra(data)));
  }

  obterDadosPublicacoesUltimoMes() {
    return this.http.get(`${environment.urlObterDadosPublicacoesUltimoMes}`)
    .pipe(map(data => this.transformToObterDadosPublicacoesUltimoMes(data)));
  }

  private transformToObterDadosUltimoMesDiasGraficoBarra(data: any) {
    let response: ObterDadosUltimoMesGraficoBarraResponse = new ObterDadosUltimoMesGraficoBarraResponse();

    if (data) {
      response.total = data.result.total;
      response.lista = data.result.lista;
    }

    return response;
  }

  private transformToObterDadosPublicacoesUltimoMes(data: any) {
    let response: ObterDadosPublicacoesUltimoMesResponse = new ObterDadosPublicacoesUltimoMesResponse();

    if (data) {
      response.id = data.result.id;
      response.lista = data.result.lista;
    }

    return response;
  }
}
