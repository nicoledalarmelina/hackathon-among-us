import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';
import { ObterDadosUltimoMesGraficoBarraResponse } from '../core/responses/dashboard/obter-dados-ultimo-mes-grafico-barra.response';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  obterDadosUltimos30DiasGraficoBarra() {
    return this.http.get(`${environment.urlObterDadosUltimos30DiasGraficoBarra}`)
    .pipe(map(data => this.transformToObterDadosUltimos30DiasGraficoBarra(data)));
  }

  private transformToObterDadosUltimos30DiasGraficoBarra(data: any) {
    let response: ObterDadosUltimoMesGraficoBarraResponse = new ObterDadosUltimoMesGraficoBarraResponse();

    if (data) {
      response.total = data.result.total;
      response.lista = data.result.lista;
    }

    return response;
  }
}
