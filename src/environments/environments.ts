const regulatorio = "https://regulatorio/api"; //TODO
const dashboard = "https://dashboard/api"; //TODO

export const environment = {
    //#region PALAVRA-CHAVE

    urlPalavraChave: `${regulatorio}`,

    //#endregion

    //#region DASHBOARD

    urlObterListaDocumentos: `${dashboard}/documentos`,
    urlObterDadosUltimos30DiasGraficoBarra: `${dashboard}/dashboard/ultimos-30-dias`,
    urlObterDadosPublicacoesUltimoMes: `${dashboard}/dashboard/publicacoes-ultimo-mes`,
    urlObterDadosDocumentosRecuperados: `${dashboard}/dashboard/documentos-recuperados`,
    urlObterArquivos: `${dashboard}/dashboard/arquivos`

    //#endregion
}