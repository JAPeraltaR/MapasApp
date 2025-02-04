import { Component } from '@angular/core';

interface MenuItem {
  router: string,
  name: string
}

@Component({
  selector: 'maps-side-menu',
  standalone: false,

  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { router: '/maps/fullscreen', name: 'FullScreen'},
    { router: '/maps/zoom-range', name: 'ZoomRage'},
    { router: '/maps/markers', name: 'Markers'},
    { router: '/maps/properties', name: 'Properties'},
  ]
}
