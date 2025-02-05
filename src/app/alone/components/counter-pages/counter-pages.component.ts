import { Component, Input } from '@angular/core';

@Component({
  selector: 'alone-counter-pages',
  standalone: true,
  templateUrl: './counter-pages.component.html',
  styleUrl: './counter-pages.component.css'
})
export class CounterPagesComponent {

  @Input()
  public counter!: number;

  increase(): void {
    this.counter++
  }


  decrease(): void {
    this.counter--
  }

}
