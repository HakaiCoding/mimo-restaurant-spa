import { Component } from '@angular/core';
import { ScreenSizeService } from '../services/screen-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public screen_size_service: ScreenSizeService
  ) { }

  isMenuVisible: boolean = false;

  toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
  }

}
