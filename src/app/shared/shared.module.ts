import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MenuService } from './components/menu/menu.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    DatePipe,
    MenuService
  ]
})
export class SharedModule { }
