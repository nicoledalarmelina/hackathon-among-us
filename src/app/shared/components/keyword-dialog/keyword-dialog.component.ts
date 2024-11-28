import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-keyword-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './keyword-dialog.component.html',
  styleUrl: './keyword-dialog.component.scss'
})
export class KeywordDialogComponent {

}
