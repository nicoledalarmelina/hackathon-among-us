import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { ObterPalavrasChaveResponse } from '../core/responses/palavra-chave/obter-palavras-chave.response';
import { map, Observable } from 'rxjs';
import { CriarPalavraChaveRequest } from '../core/requests/palavra-chave/criar-palavra-chave.request';
import { CriarPalavraChaveResponse } from '../core/responses/palavra-chave/criar-palavra-chave.response';
import { ExcluirPalavraChaveResponse } from '../core/responses/palavra-chave/excluir-palavra-chave.response';

@Injectable({
  providedIn: 'root'
})
export class PalavraChaveService {

  constructor(private http: HttpClient) { }

  obterPalavrasChave(): Observable<ObterPalavrasChaveResponse> {
    return this.http.get<ObterPalavrasChaveResponse>(`${environment.urlPalavraChave}`)
      .pipe(map(data => this.transformToObterPalavrasChave(data)));
  }

  criarPalavraChave(request: CriarPalavraChaveRequest): Observable<CriarPalavraChaveResponse> {
    return this.http.post<CriarPalavraChaveResponse>(`${environment.urlPalavraChave}`, request)
      .pipe(map(data => this.transformToCriarPalavraChave(data)));
  }

  excluirPalavraChave(id: number): Observable<ExcluirPalavraChaveResponse> {
    return this.http.delete<ExcluirPalavraChaveResponse>(`${environment.urlPalavraChave}/${id}`)
      .pipe(map(data => this.transformToExcluirPalavraChave(data)));
  }

  //#region Privates

  private transformToObterPalavrasChave(data: any): ObterPalavrasChaveResponse {
    let response: ObterPalavrasChaveResponse = new ObterPalavrasChaveResponse();

    if (data) { response.listaPalavras = data.result.listaPalavras; }

    return response;
  }

  private transformToCriarPalavraChave(data: any): CriarPalavraChaveResponse {
    let response: CriarPalavraChaveResponse = new CriarPalavraChaveResponse();

    if (data) { response.id = data.result.id; }

    return response;
  }

  private transformToExcluirPalavraChave(data: any): ExcluirPalavraChaveResponse {
    let response: ExcluirPalavraChaveResponse = new ExcluirPalavraChaveResponse();

    if (data) { response.id = data.result.id; }

    return response;
  }

  //#endregion
}
