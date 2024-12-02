import { Component, Input, LOCALE_ID } from '@angular/core';
import { DocumentoRecuperado } from '../../../core/models/dashboard/documento-recuperado.model';
import { TipoDocumento } from '../../../core/enums/tipoDocumento.enum';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-file-card',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatButtonModule],
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.scss'
})
export class FileCardComponent {
  @Input('documento') documento: DocumentoRecuperado;

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
    let mes = vigencia.getMonth();

    return `${vigencia.getDate()} de ${this.meses[mes]} de ${vigencia.getFullYear()}`;
  }

  getName(uf: string) {
    switch (uf) {
      case 'MG': return 'Minas Gerais';
      case 'PR': return 'Paraná';
      case 'SP': return 'São Paulo';

      default: return '';
    }
  }
}
