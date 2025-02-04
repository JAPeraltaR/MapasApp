import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zommr-range-page',
  standalone: false,

  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{


  @ViewChild('map')
  public divMap?: ElementRef

  public currentZoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(2,3);

  ngAfterViewInit(): void {
    if( !this.divMap )  throw ("El elemento HTML no fue encontrado");

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.currentZoom, // starting zoom
    });
    this.mapListeners();
  }

  mapListeners() {
    if( !this.map ) throw('Mapa no inicializado');

    this.map!.on('zoom', () => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map!.on('zoomend', () => {
      if( this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18);
    });

    this.map.on('moveend', () => {
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomChange( value: string ) {
    this.currentZoom = Number(value);
    this.map?.zoomTo(this.currentZoom);
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
