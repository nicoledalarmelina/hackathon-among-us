import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ArquivoRecuperado } from '../../../core/models/dashboard/arquivo-recuperado.model';
import { Utility } from '../../../core/common/utility';

@Component({
  selector: 'app-file-card',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatButtonModule],
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.scss'
})
export class FileCardComponent {
  @Input('documento') set setDocumento(documento: ArquivoRecuperado) {
    this.documento = documento;
    this.splitName(documento);
  }

  utility = Utility;
  documento: ArquivoRecuperado;
  private meses: string[] = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]

  formatarData(vigencia: Date): string {
    let dataArquivo = new Date(vigencia);

    let mes = dataArquivo.getMonth();

    return `${dataArquivo.getDate()} de ${this.meses[mes]} de ${dataArquivo.getFullYear()}`;
  }

  getResumo(resumoArquivo: string) {
    if (resumoArquivo == 'Erro ao gerar resumo') return 'Não foi possível gerar o resumo pois o documento possui dados sensíveis.';
    return resumoArquivo;
  }

  splitName(documento: ArquivoRecuperado) {
    let first = documento.nomeArquivo.split('_');
    let split = [];

    if (first.length > 1) split = (first[1].charAt(0).toUpperCase() + first[1].slice(1)).split('-');
    else split = (documento.nomeArquivo.charAt(0).toUpperCase() + documento.nomeArquivo.slice(1)).split('-');

    documento.nomeArquivo = split.join(' ');
  }
}
