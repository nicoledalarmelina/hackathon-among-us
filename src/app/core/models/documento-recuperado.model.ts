import { TipoDocumento } from "../enums/tipoDocumento.enum";

export class DocumentoRecuperado {
    tipoDocumento: TipoDocumento;
    titulo: string;
    resumo: string;
    vigencia: Date;
    base64: string;
}