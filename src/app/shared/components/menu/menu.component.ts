import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu.model';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgClass, MenuItemsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  constructor(
    private eRef: ElementRef,
    private router: Router
  ) { }

  private menuService = inject(MenuService);

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (
      !this.eRef.nativeElement.contains(event.target) &&
      event.path?.find((p: any) => p.className == 'sidebar') == undefined
    ) {
      if (
        event.path?.find((classe: any) => classe.id == 'menuHamburger') == undefined
      ) {
        if (this.activeMenu) {
          this.menuService.activateMenu(false);
        }
      }
    }
  }

  activeMenu: boolean = false;
  menuItems: Menu[] = [
    {
      id: 'juridico',
      icon: 'fa-solid fa-section',
      label: 'Regulatório',
      active: false,
      link: '',
      child: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          active: false,
          link: '/',
          parentId: 'juridico',
        },
        {
          id: 'palavra-chave',
          label: 'Palavra-chave',
          active: false,
          link: '/palavra-chave',
          parentId: 'juridico',
        },
        {
          id: 'documentos-recuperados',
          label: 'Documentos recuperados',
          active: false,
          link: '/documentos-recuperados',
          parentId: 'juridico',
        }
      ],
    }
  ];

  ngOnInit(): void {
    this.menuService.activeMenu$.subscribe((menu) => {
      this.activeMenu = menu;
      if (!this.activeMenu) {
        let itemAtivo = this.menuItems.filter((item) => item.active)[0];
        if (itemAtivo) {
          itemAtivo.active = false;
        }
      }
    });
  }

  toggleItem(itemId: string) {
    let menuItem = this.menuItems.filter((item) => item.id == itemId)[0];
    if (menuItem.child != null) {
      if (!menuItem.active) {
        let itemAtivo = this.menuItems.filter(
          (item) =>
            item.id != itemId && item.id != menuItem.parentId && item.active
        )[0];
        if (itemAtivo != undefined) {
          itemAtivo.active = false;
        }

        this.menuService.activateMenu(true);
      }

      this.menuItems.filter((item) => item.id == itemId)[0].active =
        !menuItem.active;
    }
  }

  clickLink(event: any, menuItem: Menu) {
    if (menuItem.link == '') {
      this.toggleItem(menuItem.id);
      return;
    }

    this.router.navigate([`${menuItem.link}`]);
    this.menuService.activateMenu(false);
  }
}
