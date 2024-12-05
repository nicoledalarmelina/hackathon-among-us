import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu.model';
import { CommonModule, NgClass } from '@angular/common';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {

  constructor(
    private router: Router) { }

  private menuService = inject(MenuService);

  activeMenuItem: boolean = false;
  menuItemId: string = '';

  @Input() menuItems: Menu[] | null;
  @Input() levelNumber: number = 1;
  @Input() parentId: string = '';
  @Input('mouseEnter') set setMouseEnter(value: any) {
    this.menuItemId = value;
    this.onMouseEnter(value);
  }

  ngOnInit(): void {
    this.menuService.activeMenu$.subscribe(menu => {
      this.activeMenuItem = menu;
      if (!this.activeMenuItem) {
        let itemAtivo = this.menuItems?.filter(item => item.active)[0];
        if (itemAtivo) { itemAtivo.active = false; }
      }
    })
  }

  toggleItem(itemId: string) {
    let menuItem = this.menuItems?.filter(item => item.id == itemId)[0];
    if (menuItem?.child != null) {
      if (!menuItem?.active) {
        let itemAtivo = this.menuItems?.filter(item => item.id != itemId && item.id != menuItem.parentId && item.active)[0];
        if (itemAtivo != undefined) { itemAtivo.active = false; }

        this.menuService.activateMenu(true);
      }

      // this.menuItems?.filter(item => item.id == itemId)[0]?.active = !menuItem.active;
      if (menuItem.active) { this.menuItemId = menuItem.id; }
      // else { this.menuItemId = null; }
    }
  }

  onMouseEnter(itemId: string) {
    //TODO: alterar para que quando o item nao tiver link, so expanda quando clicar (para abrir niveis acima de 2)
    if (itemId != null) {
      var element = document.querySelector<HTMLElement>('#' + itemId + ' ul.child')!;

      if (element != null) {
        // mostra os itens do terceiro nivel
        var clone = element.cloneNode(true) as HTMLElement;
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.height = 'auto';
        clone.classList.add('slideClone');

        var body = document.querySelector<HTMLElement>('body')!;
        body.appendChild(clone);

        var slideCloneElement = document.querySelector(".slideClone") as HTMLElement;
        var newHeight = slideCloneElement.offsetHeight;

        // document.querySelector(".slideClone").remove();

        element.style.height = newHeight + 'px';

        if (this.levelNumber > 2) {
          var elementParent = document.querySelector<HTMLElement>('#' + this.parentId + ' ul.level-2')!;
          elementParent.style.height = (newHeight + 47) + 'px';
        }
      }
      return;
    }

    // retorna os itens ao estado original
    var elements = document.querySelectorAll('ul.child');

    for (let i = 0; i < elements.length; i++) {
      var elemento = elements[i] as HTMLElement;
      elemento.style.height = '0px';
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
