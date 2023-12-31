import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScreenSizeService } from '../../../services/screen-size.service';
import { MenuState, NavigationMenu, NavigationMenuService, NavigationOption } from '../../../services/navigation-menu.service';
import { Subject, takeUntil } from 'rxjs';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
  animations: [fadeInOut]
})

export class NavigationMenuComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  MenuState = MenuState;
  menuState: MenuState;
  navigationMenu: NavigationOption[];

  constructor(
    public navigation_menu_service: NavigationMenuService,
    public screen_size_service: ScreenSizeService,
    private renderer: Renderer2
  ) {

    this.menuState = this.navigation_menu_service.getIsMenuOpenValue();
    this.navigationMenu = this.navigation_menu_service.getNavigationMenuValue().options;
  }

  scrollToViewtById(id: string): void {
    const view = this.renderer.selectRootElement(`${id}`, true);
    if (view) {
      view.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngOnInit() {
    this.navigation_menu_service.getisMenuOpenObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((menuState: MenuState) => {
        this.menuState = menuState;
        console.log('menuState: ', menuState);
      });

    this.navigation_menu_service.getNavigationMenuObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((navigationMenu: NavigationMenu) => {
        this.navigationMenu = navigationMenu.options;
        console.log('navigationMenu: ', navigationMenu);
      });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
