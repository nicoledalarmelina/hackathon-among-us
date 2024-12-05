import { Injectable } from "@angular/core"
import { MatPaginatorIntl } from "@angular/material/paginator"

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
    constructor() {
        super()
        this.getAndInitTranslations()
    }

    getAndInitTranslations() {
        this.itemsPerPageLabel = 'Itens por página'
        this.nextPageLabel = 'Próxima página'
        this.previousPageLabel = 'Página anterior'
        this.firstPageLabel = 'Primeira página'
        this.lastPageLabel = 'Última página'
        this.changes.next()
    }
}