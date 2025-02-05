import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mapboxgl from 'mapbox-gl';
import { environments } from '../../environments/environments';
mapboxgl.accessToken = environments.mapbox_key

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { CounterPagesComponent } from "../alone/components/counter-pages/counter-pages.component";
import { AlonePageComponent } from '../alone/pages/alone-page/alone-page.component';



@NgModule({
  declarations: [
    MiniMapaComponent,
    MapsLayoutComponent,
    ZoomRangePageComponent,
    MarkersPageComponent,
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterPagesComponent,
    AlonePageComponent,
    SideMenuComponent
]
})
export class MapsModule { }
