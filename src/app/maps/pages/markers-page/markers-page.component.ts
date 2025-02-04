import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker;
}
interface StringMarker{
  color: string;
  lnglat: number[];
}

@Component({
  selector: 'maps-markers-page',
  standalone: false,

  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map')
  public divMap?: ElementRef;
  public markers: MarkerAndColor[] = [];

  public currentZoom: number = 13;
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

    this.readToLocalStorage();
    if( this.markers.length > 0 ){
      this.map.setCenter(this.markers[0].marker.getLngLat());
    }

  }

  createMarker() {
    if( !this.map ) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lnglat = this.map.getCenter();
    this.addMarker( lnglat, color )
  }

  addMarker( lnglat: LngLat, color: string ){
    if( !this.map ) return;
    const marker = new Marker({
      color: color,
      draggable: true
    }).setLngLat(lnglat).addTo(this.map)
    this.markers.push({
      color, marker
    });

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    })

  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveToLocalStorage();
  }

  flyto( marker: Marker ) {
    if( !marker ) return;
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    const markerToSave: StringMarker[] = this.markers.map( ({ color, marker}) => {
      return {
        color,
        lnglat: marker.getLngLat().toArray()
      }
    })
    localStorage.setItem('plainMarkers', JSON.stringify(markerToSave));
  }

  readToLocalStorage() {
    const planeMarkersOfLocal = localStorage.getItem('plainMarkers') ?? '[]';
    const planeMarkers: StringMarker[] = JSON.parse( planeMarkersOfLocal );
    planeMarkers.forEach( ({color, lnglat}) => {
      const [lng, lat] = lnglat;
      const coord = new LngLat(lng, lat)
      this.addMarker(coord, color);
    })
  }
}
