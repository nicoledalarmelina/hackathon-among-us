import { Component } from '@angular/core';
import { FileCardComponent } from '../../../shared/components/file-card/file-card.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-palavra-chave',
  standalone: true,
  imports: [
    FileCardComponent,
    BreadcrumbComponent
  ],
  templateUrl: './palavra-chave.component.html',
  styleUrl: './palavra-chave.component.scss'
})
export class PalavraChaveComponent {

}
