const diarioOficial = "https://localhost:65137/api";

export const environment = {
    //#region PALAVRA-CHAVE

    urlPalavraChave: `${diarioOficial}/consultarpalavraschave`,
    urlCriarPalavraChave: `${diarioOficial}/criarpalavrachave`,
    urlExcluirPalavraChave: `${diarioOficial}/excluirpalavrachave`,

    //#endregion

    //#region DASHBOARD

    urlObterArquivos: `${diarioOficial}/arquivosprocessados`,
    urlGraficoPalavraChave: `${diarioOficial}/palavraschavesrelevantes`,
    urlUltimosRegistros: `${diarioOficial}/obterultimosregistrosporUF`,
    urlObterEstatisticas: `${diarioOficial}/obterestatisticas`

    //#endregion
}