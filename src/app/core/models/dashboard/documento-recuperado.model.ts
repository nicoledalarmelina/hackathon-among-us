import { TipoDocumento } from "../../enums/tipoDocumento.enum";

export class DocumentoRecuperado {
    uf: string;
    titulo: string;
    resumo: string;
    vigencia: Date;
    base64: string;
}