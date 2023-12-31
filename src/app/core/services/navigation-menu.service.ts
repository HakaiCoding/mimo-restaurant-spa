import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum MenuState {
  Closed,
  Open
}

export interface NavigationOption {
  name: string;
  refId: string;
  icon: string;
  isActive: boolean;
}

export interface NavigationMenu {
  options: NavigationOption[];
}


@Injectable({
  providedIn: 'root'
})

export class NavigationMenuService {
  constructor() {
  }

  private menuState: BehaviorSubject<MenuState> = new BehaviorSubject<MenuState>(MenuState.Closed);
  private navigationMenu: BehaviorSubject<NavigationMenu> = new BehaviorSubject<NavigationMenu>({
    options: [
      { name: 'Home', refId: '#homeView', icon: 'home', isActive: true },
      { name: 'About us', refId: '#aboutUsView', icon: 'info-circle', isActive: false },
      { name: 'Menu', refId: '#menuView', icon: 'chef-hat', isActive: false },
      { name: 'Gallery', refId: '#galleryView', icon: 'photo', isActive: false },
      { name: 'Reviews', refId: '#reviewsView', icon: 'star', isActive: false },
      { name: 'Contact', refId: '#contactView', icon: 'phone', isActive: false }
    ]
  });

  toggleMenuState() {
    this.menuState.next(this.menuState.getValue() === MenuState.Closed ? MenuState.Open : MenuState.Closed);
  }

  getisMenuOpenObservable(): Observable<MenuState> {
    return this.menuState.asObservable();
  }

  getIsMenuOpenValue(): MenuState {
    return this.menuState.getValue();
  }

  getNavigationMenuObservable(): Observable<NavigationMenu> {
    return this.navigationMenu.asObservable();
  }

  getNavigationMenuValue(): NavigationMenu {
    return this.navigationMenu.getValue();
  }

  setActiveOption(name: string) {
    const updatedMenu = this.navigationMenu.getValue();
    updatedMenu.options.forEach(option => {
      if (option.name === name) {
        // Activar la opción seleccionada
        option.isActive = true;
      } else if (option.isActive) {
        // Desactivar cualquier otra opción que estuviera activa
        option.isActive = false;
      }
    });
    this.navigationMenu.next(updatedMenu);
  }

}
