import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { ObterPalavrasChaveResponse } from '../core/responses/palavra-chave/obter-palavras-chave.response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalavraChaveService {

  constructor(private http: HttpClient) { }

  obterPalavrasChave() {
    return this.http.get(`${environment.urlObterPalavraChave}`)
      .pipe(map(data => this.transformToObterPalavrasChave(data)));
  }

  private transformToObterPalavrasChave(data: any) {
    let response: ObterPalavrasChaveResponse = new ObterPalavrasChaveResponse();

    if (data) {
      response.id = data.result.id;
      response.palavra = data.result.palavra;
      response.criadaPor = data.result.criadaPor;
      response.criadaEm = data.result.criadaEm;
      response.ativa = data.result.ativa;
    }

    return response;
  }
}
