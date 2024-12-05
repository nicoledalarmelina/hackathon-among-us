import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { map, Observable } from 'rxjs';
import { ObterArquivosResponse } from '../core/responses/dashboard/obter-arquivos.response';
import { ObterGraficoPalavraChave } from '../core/responses/dashboard/obter-grafico-palavra-chave.response';
import { ObterUltimosRegistrosResponse } from '../core/responses/dashboard/obter-ultimos-registros.response';
import { ObterEstatisticasResponse } from '../core/responses/dashboard/obter-dados-documentos-recuperados.response';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  obterArquivos(pageIndex: number, pageSize: number, filter: any = null, sort: string = 'dataArquivo.desc'): Observable<ObterArquivosResponse> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize)
      .set('sort', sort);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        if (filter[key] && (filter[key] !== '' || filter[key].length !== 0)) {
          if (key == 'estado') {
            filter[key].forEach((value: any) => {
              params = params.append(key, value);
            });
          } else params = params.append(key, filter[key]);
        }
      })
    }

    return this.http.get<ObterArquivosResponse>(`${environment.urlObterArquivos}`, { params })
      .pipe(map(data => this.transformToObterArquivos(data)));
  }

  obterGraficoPalavraChave(): Observable<ObterGraficoPalavraChave> {
    return this.http.get<ObterGraficoPalavraChave>(`${environment.urlGraficoPalavraChave}`)
      .pipe(map(data => this.transformToObterGraficoPalavraChave(data)));
  }

  obterUltimosRegistros(): Observable<ObterUltimosRegistrosResponse[]> {
    return this.http.get<ObterUltimosRegistrosResponse[]>(`${environment.urlUltimosRegistros}`)
      .pipe(map(data => this.transformToObterUltimosRegistros(data)));
  }

  obterEstatisticas(): Observable<ObterEstatisticasResponse> {
    return this.http.get<ObterEstatisticasResponse>(`${environment.urlObterEstatisticas}`)
      .pipe(map(data => this.transformToObterEstatisticas(data)));
  }

  private transformToObterArquivos(data: any): ObterArquivosResponse {
    let response: ObterArquivosResponse = new ObterArquivosResponse();

    if (data) {
      response.listaArquivoProcessado = data.result.listaArquivoProcessado;
    }

    return response;
  }

  private transformToObterGraficoPalavraChave(data: any): ObterGraficoPalavraChave {
    let response: ObterGraficoPalavraChave = new ObterGraficoPalavraChave();

    if (data) {
      response.listaPalavras = data.result.listaPalavras;
    }

    return response;
  }

  private transformToObterUltimosRegistros(data: any): ObterUltimosRegistrosResponse[] {
    let response: ObterUltimosRegistrosResponse[] = [];

    if (data) {
      response = data.result;
    }

    return response;
  }

  private transformToObterEstatisticas(data: any): ObterEstatisticasResponse {
    let response: ObterEstatisticasResponse = new ObterEstatisticasResponse();

    if (data) {
      response.totalDocumentos = data.result.totalDocumentos;
      response.palavrasChavePorEstado = data.result.palavrasChavePorEstado;
    }

    return response;
  }
}
