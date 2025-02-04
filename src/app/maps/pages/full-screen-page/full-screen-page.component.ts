import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';


@Component({
  selector: 'app-full-screen-page',
  standalone: false,

  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef

  ngAfterViewInit(): void {
    if( !this.divMap )  throw ("El elemento HTML no fue encontrado");

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-77.06149167753685, -12.028838753992037],
      zoom: 20, // starting zoom
    });
  }
}
