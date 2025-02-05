import { Component } from '@angular/core';
import { CounterPagesComponent } from "../../components/counter-pages/counter-pages.component";
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";


@Component({
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
  imports: [CounterPagesComponent, SideMenuComponent]
})
export class AlonePageComponent {

}
