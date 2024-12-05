import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DocumentosRecuperadosFiltro } from "../../../core/models/documentos-recuperados/documentos-recuperados-filtro.model";
import { Utility } from "../../../core/common/utility";

@Component({
    selector: 'app-docs-filter-dialog',
    standalone: true,
    providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },],
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatSlideToggleModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './docs-filter-dialog.component.html',
    styleUrl: './docs-filter-dialog.component.scss'
})
export class DocsFilterDialogComponent implements OnInit {
    formDocsFilter: FormGroup;
    listUFs: string[] = ['DF', 'RS', 'SP'];
    utility = Utility;

    constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DocumentosRecuperadosFiltro) { }

    ngOnInit() {
        this.initializeForm()
    }

    initializeForm() {
        this.formDocsFilter = this.fb.group({
            estado: [null, []],
            dataInicial: [null],
            dataFinal: [null],
            relevante: [null]
        });

        if (this.data) {
            this.formDocsFilter.patchValue(this.data);
        }
    }

    cleanFilter() {
        this.formDocsFilter.reset();
    }
}
