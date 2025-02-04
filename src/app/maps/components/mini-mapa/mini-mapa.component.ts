import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-mapa',
  standalone: false,

  templateUrl: './mini-mapa.component.html',
  styleUrl: './mini-mapa.component.css'
})
export class MiniMapaComponent implements AfterViewInit{

  @Input()
  public latlng!: [number,number];

  public map?: Map;

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {


    if(!this.divMap) throw ( 'No se encontro la referencia del DOM.' );
    if(!this.latlng) throw ( 'No se encontro las coordenadas.' );
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.latlng,
      zoom: 15, // starting zoom
      interactive: false
    });

    const [ lng, lat ] = this.latlng;
    const lnglat = new LngLat(lng,lat)

    const mark = new Marker({
      color: '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16))
    }).setLngLat(lnglat).addTo(this.map)
  }
}
