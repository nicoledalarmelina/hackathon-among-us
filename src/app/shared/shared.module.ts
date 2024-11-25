import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileCardComponent } from './components/file-card/file-card.component';



@NgModule({
  declarations: [FileCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileCardComponent
  ]
})
export class SharedModule { }
