import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
  }
  
  selecionado: string = "";

  ngOnInit() {
    const lastSelected = sessionStorage.getItem('lastSelected');
    if (lastSelected) {
      this.selecionado = lastSelected;
      return;
    }
    this.selecionado = 'regulatorio';
  }
  
  goTo(link: string, active: string) {
    sessionStorage.setItem('lastSelected', active);
    this.selecionado = active;
    this.router.navigate([link]);
  }
}
