import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FileCardComponent } from './components/file-card/file-card.component';



@NgModule({
  declarations: [FileCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileCardComponent
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
