import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  router: string,
  name: string
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { router: '/maps/fullscreen', name: 'FullScreen'},
    { router: '/maps/zoom-range', name: 'ZoomRage'},
    { router: '/maps/markers', name: 'Markers'},
    { router: '/maps/properties', name: 'Properties'},
    { router: '/alone', name: 'Alone Page'}
  ]
}
