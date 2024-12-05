import { DetalhesEstatistica } from "../../models/dashboard/documento-recuperado-grafico.model";

export class ObterEstatisticasResponse {
  totalDocumentos: number;
  palavrasChavePorEstado: DetalhesEstatistica[];
}