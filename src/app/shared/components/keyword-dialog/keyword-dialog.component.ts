import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-keyword-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './keyword-dialog.component.html',
  styleUrl: './keyword-dialog.component.scss'
})
export class KeywordDialogComponent implements OnInit {
  formKeyword: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.formKeyword = this.fb.group({
      keyword: [null, [Validators.required, Validators.minLength(3)]]
    })
  }
}
